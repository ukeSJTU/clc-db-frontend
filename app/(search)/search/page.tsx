"use client";

import React, { useState, useCallback } from "react";
import MoleculeCard from "@/components/molecule_card";
import { PaginationComponent } from "@/components/pagination";
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
    const options = [
        { displayName: "CAS ID", searchName: "cas_id" },
        { displayName: "Name", searchName: "name" },
        { displayName: "SMILES", searchName: "smiles" },
    ];

    const [searchOpt, setSearchOpt] = useState(options[0].searchName);
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<overviewCardMoleculeProps[]>([]); // Initialize as an empty array
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10); // Default page size
    const [totalPages, setTotalPages] = useState(0);

    const handleSmilesInput = (smiles: string) => {
        setQuery(smiles);
        setSearchOpt("smiles");
    };

    const handleSearch = useCallback(async () => {
        if (query.trim() === "") {
            return; // Do not search if the query is empty
        }

        try {
            const response = await api.get(
                `/search/molecules?${searchOpt}=${query}&page=${page}&page_size=${pageSize}`
            );

            // Ensure the response is an object and has a "results" property that is an array
            const { results: fetchedResults = [], count = 0 } =
                response.data || {};
            setResults(fetchedResults);
            setTotalPages(Math.ceil(count / pageSize));
        } catch (error) {
            console.error("Failed to fetch molecules", error);
            setResults([]); // Fallback to empty results on error
        }
    }, [query, searchOpt, page, pageSize]);

    // Pagination change handler to update page and trigger the search
    const handlePageChange = (newPage: number) => {
        setPage(newPage);
        handleSearch();
    };

    // Page size change handler to update the page size and reset to page 1
    const handlePageSizeChange = (newPageSize: number) => {
        setPageSize(newPageSize);
        setPage(1);
        handleSearch();
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
            {/* Pagination Controls */}
            <div className="flex justify-end w-full max-w-6xl px-4">
                <PaginationComponent
                    page={page}
                    setPage={handlePageChange}
                    pageSize={pageSize}
                    setPageSize={handlePageSizeChange}
                    totalPages={totalPages}
                />
            </div>
            {/* Results */}
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
