"use client";

import { useState, useEffect } from "react";
import api from "@/utils/api";

import MoleculeTable from "@/components/overview_table";
import { PaginationComponent } from "@/components/pagination";

const fetchMoleculeData = async (page: number, pageSize: number) => {
    const response = await api.get(
        `/overview/card/?page=${page}&page_size=${pageSize}`
    );
    const data = response.data;
    const totalPages = Math.ceil(data.count / pageSize);
    return { results: data.results, totalPages };
};

const IndexPage = ({ params }: { params: { pageNumber: string } }) => {
    const pageNumber = parseInt(params.pageNumber, 10);
    const [molecules, setMolecules] = useState([]);
    const [page, setPage] = useState(pageNumber || 1);
    const [pageSize, setPageSize] = useState(10); // Default page size
    const [totalPages, setTotalPages] = useState(0);

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
            {/* Molecule Table */}
            <div className="shadow-md rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
                <MoleculeTable molecules={molecules} />
            </div>
            {/* Pagination Component */}
            <div className="mt-4 flex justify-center">
                <PaginationComponent
                    page={page}
                    setPage={setPage}
                    pageSize={pageSize}
                    setPageSize={setPageSize}
                    totalPages={totalPages}
                />
            </div>
        </div>
    );
};

export default IndexPage;
