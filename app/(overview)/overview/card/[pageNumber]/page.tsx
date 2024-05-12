"use client";

import { PaginationComponent } from "@/components/Pagination";
import { useState, useEffect } from "react";
import MoleculeCard from "@/components/molecule_card";
import { MoleculeProps } from "@/types/molecule";
import api from "@/utils/api";

const fetchMoleculeData = async (page: number, pageSize: number) => {
    const response = await api.get(
        `/overview/card/?page=${page}&page_size=${pageSize}`
    );
    const data = response.data;
    const totalPages = Math.ceil(data.count / pageSize); // Calculate total pages
    return { results: data.results, totalPages };
};

const IndexPage = ({ params }: { params: { pageNumber: string } }) => {
    const pageNumber = parseInt(params.pageNumber, 10);

    const [molecules, setMolecules] = useState([]);
    const [page, setPage] = useState(pageNumber);
    const [pageSize, setPageSize] = useState(10); // Default page size
    const [totalPages, setTotalPages] = useState(0); // Initially set to 0

    useEffect(() => {
        const fetchData = async () => {
            const { results, totalPages } = await fetchMoleculeData(
                page,
                pageSize
            );
            setMolecules(results);
            setTotalPages(totalPages);
        };
        fetchData();
    }, [page, pageSize]);

    return (
        <div className="max-w-6xl mx-auto p-4">
            {/* Header with Title and Pagination */}
            <div className="mt-4 flex justify-between items-center">
                {/* Left: Title or additional information */}
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Molecule Overview
                </h2>
                {/* Right: Pagination Component */}
                <PaginationComponent
                    page={page}
                    setPage={setPage}
                    pageSize={pageSize}
                    setPageSize={setPageSize}
                    totalPages={totalPages}
                />
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
                {molecules.map((molecule: MoleculeProps, index: number) => (
                    <MoleculeCard key={index} {...molecule} />
                ))}
            </div>
        </div>
    );
};

export default IndexPage;
