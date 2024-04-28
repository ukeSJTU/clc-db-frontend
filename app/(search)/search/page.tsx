"use client";

import React, { useState } from "react";
import MoleculeCard from "@/components/molecule_card";
import { overviewCardMoleculeProps } from "@/types/molecule";
import SearchOptionsGroup from "@/components/searchpage/optionGroup";
import SearchHeading from "@/components/searchpage/heading";
import SearchBar from "@/components/searchpage/bar";
import SearchTip from "@/components/searchpage/tip";
import api from "@/utils/api";

const ResultsContainer = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => (
    <div
        id="search-result"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto p-4"
    >
        {children}
    </div>
);

const SearchPage = () => {
    const [searchOpt, setSearchOpt] = useState("");
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<overviewCardMoleculeProps[]>([]);

    const options = [
        { displayName: "CAS ID", searchName: "cas_id" },
        { displayName: "Name", searchName: "name" },
        { displayName: "SMILES", searchName: "smiles" },
    ];

    const handleSmilesInput = (smiles: string) => {
        setQuery(smiles);
        setSearchOpt("smiles");
    };

    const handleSearch = async () => {
        if (query.trim() === "") {
            return; // Do not search if query is empty
        }

        console.log(
            "Searching for:",
            `/search/molecules?${searchOpt}=${query}`
        );

        try {
            const response = await api.get(
                `/search/molecules?${searchOpt}=${query}`
            );
            setResults(response.data);
        } catch (error) {
            console.error("Failed to fetch molecules", error);
            setResults([]);
        }
    };

    return (
        <div className="flex flex-col items-center py-12 space-y-4">
            <SearchHeading />
            <SearchTip />
            <div className="flex flex-col gap-2 w-full max-w-md sm:max-w-lg md:max-w-2xl">
                <SearchOptionsGroup
                    options={options}
                    setSearchOpt={setSearchOpt}
                    searchOpt={searchOpt}
                />
                <SearchBar
                    query={query}
                    setQuery={setQuery}
                    handleSearch={handleSearch}
                    onSmilesInput={handleSmilesInput}
                />
            </div>
            <ResultsContainer>
                {results.map(
                    (molecule: overviewCardMoleculeProps, index: number) => (
                        <MoleculeCard key={index} {...molecule} />
                    )
                )}
            </ResultsContainer>
        </div>
    );
};

export default SearchPage;
