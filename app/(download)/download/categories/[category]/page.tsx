"use client";

import { useEffect, useState } from "react";
import OverviewContainer from "@/components/OverviewContainer";
import { MoleculeProps } from "@/types/molecule";
import api from "@/utils/api";
import { Button } from "@/components/ui/button";
import downloadFiles from "@/lib/download";
import CategoryBadge from "@/components/CategoryBadge";

const CategoryDownloadPage = ({ params }: { params: { category: string } }) => {
    const [molecules, setMolecules] = useState<MoleculeProps[]>([]);
    const [paginationState, setPaginationState] = useState({
        page: 1,
        pageSize: 10,
        totalPages: 0,
    });

    const decodedClassType = decodeURIComponent(params.category);

    // Fetch molecules for the current page
    useEffect(() => {
        const fetchMolecules = async () => {
            const response = await api.get(
                `/search/molecules?category=${params.category}&page=${paginationState.page}&page_size=${paginationState.pageSize}`
            );
            const data = response.data;
            setMolecules(data.results);
            setPaginationState((prevState) => ({
                ...prevState,
                totalPages: Math.ceil(data.count / paginationState.pageSize),
            }));
        };

        fetchMolecules();
    }, [params.category, paginationState.page, paginationState.pageSize]);

    // Download only the current page's molecules
    const handleDownloadPage = () => {
        // Generate paths for all SDF files in the current page
        const sdfFiles = molecules.map(
            (molecule) => `/all_sdfs/${molecule.cas_id}.sdf`
        );

        downloadFiles("zip", molecules, sdfFiles);
    };

    // Download all molecules belonging to this category
    const handleDownloadAll = async () => {
        const allMolecules: MoleculeProps[] = [];
        const sdfFiles: string[] = [];
        let nextPage = 1;
        // Set a reasonable page size for fetching all data in batches
        // If it often stucks, decrease the page size for lower band width usage
        const allPageSize = 30;

        // Fetch all molecules belonging to this category in batches
        let hasNext = true;
        while (hasNext) {
            console.log(
                `/search/molecules?category=${params.category}&page=${nextPage}&page_size=${allPageSize}`
            );
            try {
                const response = await api.get(
                    `/search/molecules?category=${params.category}&page=${nextPage}&page_size=${allPageSize}`
                );
                const data = response.data;
                if (data.results.length === 0) {
                    hasNext = false;
                } else {
                    allMolecules.push(...data.results);
                    sdfFiles.push(
                        ...data.results.map(
                            (molecule: MoleculeProps) =>
                                `/all_sdfs/${molecule.cas_id}.sdf`
                        )
                    );
                    nextPage++;
                }
            } catch (error) {
                hasNext = false;
            }
        }

        // Download everything in one ZIP
        downloadFiles("zip", allMolecules, sdfFiles);
    };

    const handlePaginationChange = (
        newPaginationState: typeof paginationState
    ) => {
        setPaginationState(newPaginationState);
    };

    return (
        <div className="flex flex-col max-w-6xl mx-auto gap-4 p-4">
            <div className="flex flex-row justify-center items-center">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 px-3">
                    Searching for Molecules of:
                </h2>
                <CategoryBadge
                    category={{ name: decodedClassType }}
                    abbreviate={false}
                />
            </div>
            <OverviewContainer
                molecules={molecules}
                paginationProps={{
                    page: paginationState.page,
                    setPage: (page) =>
                        handlePaginationChange({ ...paginationState, page }),
                    pageSize: paginationState.pageSize,
                    setPageSize: (pageSize) =>
                        handlePaginationChange({
                            ...paginationState,
                            pageSize,
                        }),
                    totalPages: paginationState.totalPages,
                }}
                topLeftComponent={
                    <div className="mt-4 flex justify-between items-center">
                        <div className="flex flex-row space-x-4">
                            {/* Download Page Button */}
                            <Button
                                onClick={handleDownloadPage}
                                variant="secondary"
                            >
                                Download Page
                            </Button>
                            {/* Download All Button */}
                            <Button
                                onClick={handleDownloadAll}
                                variant="secondary"
                            >
                                Download All
                            </Button>
                        </div>
                    </div>
                }
            ></OverviewContainer>
        </div>
    );
};

export default CategoryDownloadPage;
