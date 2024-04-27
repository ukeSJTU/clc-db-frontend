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

    // const handlePageSizeChange = (
    //     event: React.ChangeEvent<HTMLInputElement>
    // ) => {
    //     const newSize = parseInt(event.target.value, 10);
    //     if (!isNaN(newSize) && newSize > 0) {
    //         setPageSize(newSize);
    //     } else {
    //         setPageSize(10); // Default to 10 if the input is invalid or zero
    //     }
    // };

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto p-4">
                {molecules.map(
                    (molecule: overviewCardMoleculeProps, index: number) => (
                        <MoleculeCard key={index} {...molecule} />
                    )
                )}
            </div>

            <div className="mt-4 flex justify-center">
                <PaginationComponent
                    page={page}
                    setPage={setPage}
                    pageSize={pageSize}
                    setPageSize={setPageSize}
                    totalPages={totalPages}
                    baseUrl="/overview/card"
                />
            </div>
        </div>
    );
};

export default IndexPage;
