"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import MoleculeCard from "@/components/molecule_card";

import { simplifiedMoleculeProps } from "@/types/molecule";

const fetchMoleculeData = async (page: number) => {
    const response = await axios.get(
        `http://www.ukehome.top/api/overview/card/?page=${page}`
    );
    return response.data;
};

const IndexPage = () => {
    const [molecules, setMolecules] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchMoleculeData(page);
            setMolecules(data.results);
        };
        fetchData();
    }, [page]);

    const handleNextPage = () => {
        setPage(page + 1);
    };

    const handlePreviousPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    return (
        <div>
            <div className="grid grid-cols-3 gap-4">
                {molecules.map(
                    (molecule: simplifiedMoleculeProps, index: number) => (
                        <MoleculeCard key={index} {...molecule} />
                    )
                )}
            </div>
            <div className="mt-4 flex justify-center">
                <button
                    onClick={handlePreviousPage}
                    disabled={page === 1}
                    className={`${
                        page === 1
                            ? "bg-gray-300 cursor-not-allowed"
                            : "bg-blue-500 hover:bg-blue-700"
                    } text-white font-bold py-2 px-4 mr-2 rounded`}
                >
                    Previous Page
                </button>
                <button
                    onClick={handleNextPage}
                    disabled={page === totalPages}
                    className={`${
                        page === totalPages
                            ? "bg-gray-300 cursor-not-allowed"
                            : "bg-blue-500 hover:bg-blue-700"
                    } text-white font-bold py-2 px-4 rounded`}
                >
                    Next Page
                </button>
            </div>
        </div>
    );
};

export default IndexPage;
