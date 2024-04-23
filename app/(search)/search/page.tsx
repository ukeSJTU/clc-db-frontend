"use client";

import React, { useState } from "react";
import axios from "axios";

import SearchBarComponent from "@/components/searchbar";
import MoleculeCard from "@/components/molecule_card";
import {
    completeMoleculeProps,
    simplifiedMoleculeProps,
} from "@/types/molecule";

import SearchHeading from "@/components/searchpage/heading";
import SearchBar from "@/components/searchpage/bar";
import SearchTip from "@/components/searchpage/tip";
import SearchOption from "@/components/searchpage/option";

const SearchPage = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<completeMoleculeProps[]>([]); // Simplified type usage

    const options = [{ name: "CAS ID" }, { name: "Name" }, { name: "SMILE" }];

    const handleSearch = async () => {
        if (query.trim() === "") {
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
        <div className="flex flex-col items-center py-12 space-y-4">
            <SearchHeading />
            <div className="flex flex-col gap-2 w-full max-w-md sm:max-w-lg md:max-w-2xl">
                <SearchBar
                    query={query}
                    setQuery={setQuery}
                    handleSearch={handleSearch}
                />
                <SearchTip />
                <div className="flex items-center gap-4">
                    {options.map((option, index) => (
                        <SearchOption key={index} name={option.name} />
                    ))}
                </div>
            </div>
            <div
                id="search-result"
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto p-4"
            >
                {results.map(
                    (molecule: simplifiedMoleculeProps, index: number) => (
                        <MoleculeCard key={index} {...molecule} />
                    )
                )}
            </div>
        </div>
    );
};

export default SearchPage;
