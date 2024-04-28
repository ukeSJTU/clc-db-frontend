"use client";

import React, { useState } from "react";

import MoleculeCard from "@/components/molecule_card";
import { overviewCardMoleculeProps } from "@/types/molecule";

import SearchOptionsGroup from "@/components/searchpage/optionGroup";
import SearchHeading from "@/components/searchpage/heading";
import SearchBar from "@/components/searchpage/bar";
import SearchTip from "@/components/searchpage/tip";
import SearchOption from "@/components/searchpage/option";
import api from "@/utils/api";

const SearchPage = () => {
    const [searchOpt, setSearchOpt] = useState("");
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<overviewCardMoleculeProps[]>([]); // Simplified type usage

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
            {/* This is the heading (plaintext) for search page */}
            <div className="flex flex-col items-center space-y-2 text-center">
                <h1 className="text-3xl font-bold">Search for a Molecule?</h1>
                <p className="max-w-[600px] text-gray-500 dark:text-gray-400">
                    Enter your search query below to find the best match. You
                    can search for CAS ID, Name, or SMILE by ticking the
                    checkbox below.
                    {/* TODO: later use shared option tables to add CAS ID, Name, SMILE, etc ... */}
                </p>
            </div>
            <div>
                {/* This is the tips (plaintext) for search page */}
                <small className="text-xs text-gray-500 dark:text-gray-400">
                    Tip: Tick multiple options to search by multiple fields.
                </small>
            </div>
            {/* This is the container for search options and the search bar */}
            <div className="flex flex-col gap-2 w-full max-w-md sm:max-w-lg md:max-w-2xl">
                {/* This is the search option group */}
                <SearchOptionsGroup
                    options={options}
                    setSearchOpt={setSearchOpt}
                    searchOpt={searchOpt}
                />
                {/* This is the search bar component */}
                <SearchBar
                    query={query}
                    setQuery={setQuery}
                    handleSearch={handleSearch}
                    onSmilesInput={handleSmilesInput}
                />
            </div>
            {/* This is where to display search results */}
            <div
                id="search-result"
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto p-4"
            >
                {results.map(
                    (molecule: overviewCardMoleculeProps, index: number) => (
                        <MoleculeCard key={index} {...molecule} />
                    )
                )}
            </div>
        </div>
    );
};

export default SearchPage;
