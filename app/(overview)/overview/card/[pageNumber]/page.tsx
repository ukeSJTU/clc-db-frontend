"use client";

import PaginationComponent from "@/components/dynamic_pagination";
import { useState, useEffect } from "react";
import axios from "axios";
import MoleculeCard from "@/components/molecule_card";

import { overviewCardMoleculeProps } from "@/types/molecule";

import api from "@/utils/api";

const fetchMoleculeData = async (page: number, pageSize: number) => {
    const response = await api.get(
        `/overview/card/?page=${page}&page_size=${pageSize}`
    );
    const data = response.data;
    const totalPages = Math.ceil(data.count / pageSize); // Calculate total pages
    console.log("[debug]=>", "totalPages:", totalPages);
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
            setTotalPages(totalPages); // Update state with the fetched total pages
        };
        fetchData();
    }, [page, pageSize]);

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto p-4">
                {molecules.map(
                    (molecule: overviewCardMoleculeProps, index: number) => (
                        <MoleculeCard key={index} {...molecule} />
                    )
                )}
            </div>
            <div className="mt-2 flex justify-center">
                <label htmlFor="pageSize" className="mr-2">
                    Rows per page:
                </label>
                <input
                    id="pageSize"
                    type="number"
                    value={pageSize}
                    placeholder="10"
                    onChange={(e) => setPageSize(parseInt(e.target.value, 10))}
                    className="border rounded px-2 py-1"
                />
            </div>
            <div className="mt-4 flex justify-center">
                <PaginationComponent
                    page={page}
                    setPage={setPage}
                    totalPages={totalPages}
                />
            </div>
        </div>
    );
};

export default IndexPage;
