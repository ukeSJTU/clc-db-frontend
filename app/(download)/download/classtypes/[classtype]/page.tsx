"use client";

import { useEffect, useState } from "react";
import MoleculeCard from "@/components/molecule_card";
import { PaginationComponent } from "@/components/pagination";
import { MoleculeProps } from "@/types/molecule";
import api from "@/utils/api";
import { Button } from "@/components/ui/button";
import downloadFiles from "@/lib/download";

const ClassTypePage = ({ params }: { params: { classtype: string } }) => {
    const [molecules, setMolecules] = useState<MoleculeProps[]>([]);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const fetchMolecules = async () => {
            const response = await api.get(
                `/search/molecules?class_type=${params.classtype}&page=${page}&page_size=${pageSize}`
            );

            const data = response.data;
            setMolecules(data.results);
            setTotalPages(Math.ceil(data.count / pageSize));
        };

        fetchMolecules();
    }, [params.classtype, page, pageSize]);

    const handleDownloadAll = () => {
        // Generate paths for all SDF files
        const sdfFiles = molecules.map(
            (molecule) => `/all_sdfs/${molecule.cas_id}.sdf`
        );

        // Use the `downloadFiles` function to download all data in a ZIP file
        downloadFiles("zip", molecules, sdfFiles);
    };

    return (
        <div className="flex flex-col gap-4">
            <div className="mt-4 flex justify-between items-center">
                {/* Download All Button */}
                <Button onClick={handleDownloadAll} variant="outline">
                    Download All
                </Button>

                {/* Pagination Component */}
                <PaginationComponent
                    page={page}
                    setPage={setPage}
                    pageSize={pageSize}
                    setPageSize={setPageSize}
                    totalPages={totalPages}
                />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {molecules.map((molecule, index) => (
                    <MoleculeCard key={index} {...molecule} />
                ))}
            </div>
        </div>
    );
};

export default ClassTypePage;
