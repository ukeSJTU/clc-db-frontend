"use client";

// Assume this code is in pages/search.tsx or a similar file
import React, { useState } from "react";
import axios from "axios";

import SearchBarComponent from "@/components/searchbar";
import MoleculeCard from "@/components/molecule_card";
import { completeMoleculeProps } from "@/types/molecule";

type Molecule = {
    name: string;
    cas_id: string;
    class_type: string;
    url: string;
    pubchem_url: string;
    smiles: string;
    smiles_type: string;
    remarks?: string;
};

const SearchPage = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<completeMoleculeProps[]>([]); // Simplified type usage

    const handleSearch = async () => {
        if (query === "") {
            return; // Do not search if query is empty
        }

        try {
            const response = await axios.get(
                `http://www.ukehome.top/api/search/molecules?search=${query}`
            );
            setResults(response.data);
        } catch (error) {
            console.error("Failed to fetch molecules", error);
            setResults([]);
        }
    };

    return (
        <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100 w-full">
            <div className="w-full p-4 bg-white shadow-md">
                <SearchBarComponent
                    query={query}
                    setQuery={setQuery}
                    handleSearch={handleSearch}
                />
            </div>
            <div className="w-full p-8 grid grid-cols-3 gap-4 ">
                {results.length > 0 ? (
                    results.map((molecule, idx) => (
                        <MoleculeCard key={idx} {...molecule} />
                    ))
                ) : (
                    <div className="flex items-center justify-center p-8">
                        {/* <p className="text-xl">No results found.</p> */}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchPage;
