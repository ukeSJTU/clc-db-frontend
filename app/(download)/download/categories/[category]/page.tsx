"use client";

import { useEffect, useState } from "react";
import { MolecularGridLayout } from "@/components/OverviewLayouts";
import { PaginationComponent } from "@/components/Pagination";
import { MoleculeProps } from "@/types/molecule";
import api from "@/utils/api";
import { Button } from "@/components/ui/button";
import downloadFiles from "@/lib/download";

const ClassTypePage = ({ params }: { params: { category: string } }) => {
    const [molecules, setMolecules] = useState<MoleculeProps[]>([]);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [totalPages, setTotalPages] = useState(0);

    // Fetch molecules for the current page
    useEffect(() => {
        const fetchMolecules = async () => {
            const response = await api.get(
                `/search/molecules?category=${params.category}&page=${page}&page_size=${pageSize}`
            );
            const data = response.data;
            setMolecules(data.results);
            setTotalPages(Math.ceil(data.count / pageSize));
        };

        fetchMolecules();
    }, [params.category, page, pageSize]);

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
                // console.log("Fetching page", nextPage);
                // console.log("Data:", data.results.length);
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

    return (
        <div className="flex flex-col gap-4 p-4">
            <div className="mt-4 flex justify-between items-center">
                <div className="flex flex-row space-x-4">
                    {/* Download Page Button */}
                    <Button onClick={handleDownloadPage} variant="secondary">
                        Download Page
                    </Button>
                    {/* Download All Button */}
                    <Button onClick={handleDownloadAll} variant="secondary">
                        Download All
                    </Button>
                </div>

                {/* Pagination Component */}
                <PaginationComponent
                    page={page}
                    setPage={setPage}
                    pageSize={pageSize}
                    setPageSize={setPageSize}
                    totalPages={totalPages}
                />
            </div>
            <MolecularGridLayout molecules={molecules} />
        </div>
    );
};

export default ClassTypePage;
