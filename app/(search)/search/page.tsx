"use client";

import React, { useState, useCallback } from "react";
import SearchBar from "@/components/searchpage/SearchBar";
import { MoleculeProps } from "@/types/molecule";
import { SquarePlus, ShuffleIcon } from "lucide-react";
import SearchResultsContainer from "@/components/searchpage/SearchResults";
import SearchOptionsGroup from "@/components/searchpage/optionGroup";
import { SearchHeading, SearchTip } from "@/components/searchpage/SearchText";
import api from "@/utils/api";
import {
    DrawStructureComponent,
    MultiCasIDSearchComponent,
} from "@/components/searchpage/SpecialSearch";

const SearchPage = () => {
    const options = [
        { displayName: "CAS ID", searchName: "cas_id" },
        { displayName: "Name", searchName: "name" },
        { displayName: "SMILES", searchName: "smiles" },
    ];

    const [searchOpt, setSearchOpt] = useState(options[0].searchName); // Initialize as the first option
    const [query, setQuery] = useState(""); // Initialize as an empty string as the default query
    const [results, setResults] = useState<MoleculeProps[]>([]); // Initialize as an empty array as the default results
    const [isLoading, setIsLoading] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    // Default pagination settings
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [totalPages, setTotalPages] = useState(0);

    const handleSearch = async () => {
        if (query.trim() === "") {
            setResults([]); // Clear results if the query is empty
            setTotalPages(0);
            return;
        }

        setIsLoading(true); // Start loading
        console.log(
            "Searching:",
            `/search/molecules?${searchOpt}=${query}&page=${page}&page_size=${pageSize}`
        );
        try {
            const response = await api.get(
                `/search/molecules?${searchOpt}=${query}&page=${page}&page_size=${pageSize}`
            );

            // Ensure the response is an object and has a "results" property that is an array
            const { results: fetchedResults = [], count = 0 } =
                response.data || {};

            console.log("fetchedResults", fetchedResults);
            setResults(fetchedResults);
            setTotalPages(Math.ceil(count / pageSize));
        } catch (error) {
            console.error("Failed to fetch molecules", error);
            setResults([]); // Fallback to empty results on error
            setTotalPages(0);
        } finally {
            setIsLoading(false); // Stop loading
        }
    };

    const handleSpecialSearchInput = (
        query_str: string,
        searchOpt: string,
        triggerSearch: boolean = true
    ) => {
        setQuery(query_str);
        setSearchOpt(searchOpt);
        console.log("query_str", query_str);
        console.log("searchOpt", searchOpt);
        console.log("triggerSearch", triggerSearch);
        if (triggerSearch === true) {
            console.log("triggering search");
            handleSearch();
        }
    };

    const handleSmilesInput = (smiles: string) => {
        setQuery(smiles);
        setSearchOpt("smiles");
    };

    return (
        <div className="flex flex-col items-center py-12 space-y-4">
            {/* Search Components */}
            <div className="flex flex-col gap-2 w-full max-w-md sm:max-w-lg md:max-w-2xl">
                <SearchHeading />
                {/* <SearchTip /> */}
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
                <div className="flex md:flex-row items-center justify-start">
                    <DrawStructureComponent
                        onSubmit={handleSpecialSearchInput}
                        onClose={() => setShowDropdown(false)}
                    />
                    <MultiCasIDSearchComponent
                        onSubmit={handleSpecialSearchInput}
                        onClose={() => setShowDropdown(false)}
                    />
                </div>
            </div>
            {/* Result Components */}
            <div className="flex flex-row ">
                <SearchResultsContainer molecules={results} />
            </div>
        </div>
    );
};

export default SearchPage;
