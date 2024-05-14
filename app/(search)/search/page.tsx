"use client";

import React, { useState } from "react";
import SearchBar from "@/components/searchpage/SearchBar";
import { MoleculeProps } from "@/types/molecule";
import OverviewContainer from "@/components/OverviewContainer";
import SearchOptionsGroup from "@/components/searchpage/SearchOptionsGroup";
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

    const [searchOpt, setSearchOpt] = useState(options[0].searchName);
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<MoleculeProps[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    // Pagination settings
    const [paginationState, setPaginationState] = useState({
        page: 1,
        pageSize: 10,
        totalPages: 0,
    });

    const handleSearch = async () => {
        if (query.trim() === "") {
            setResults([]);
            setPaginationState((prevState) => ({
                ...prevState,
                totalPages: 0,
            }));
            return;
        }

        setIsLoading(true);
        console.log(
            "Searching:",
            `/search/molecules?${searchOpt}=${query}&page=${paginationState.page}&page_size=${paginationState.pageSize}`
        );

        try {
            const response = await api.get(
                `/search/molecules?${searchOpt}=${query}&page=${paginationState.page}&page_size=${paginationState.pageSize}`
            );

            const { results: fetchedResults = [], count = 0 } =
                response.data || {};

            console.log("fetchedResults", fetchedResults);
            setResults(fetchedResults);
            setPaginationState((prevState) => ({
                ...prevState,
                totalPages: Math.ceil(count / paginationState.pageSize),
            }));
        } catch (error) {
            console.error("Failed to fetch molecules", error);
            setResults([]);
            setPaginationState((prevState) => ({
                ...prevState,
                totalPages: 0,
            }));
        } finally {
            setIsLoading(false);
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

    const handlePaginationChange = (
        newPaginationState: typeof paginationState
    ) => {
        setPaginationState(newPaginationState);
    };

    return (
        <div className="flex flex-col items-center py-12 space-y-4">
            {/* Search Components */}
            <div className="flex flex-col gap-2 w-full max-w-md sm:max-w-lg md:max-w-2xl">
                <SearchHeading />
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
                <div className="flex flex-row items-center justify-center px-4">
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
            <OverviewContainer
                molecules={results}
                paginationProps={{
                    page: paginationState.page,
                    setPage: (page) =>
                        handlePaginationChange({ ...paginationState, page }),
                    pageSize: paginationState.pageSize,
                    setPageSize: (pageSize) =>
                        handlePaginationChange({
                            ...paginationState,
                            pageSize,
                        }),
                    totalPages: paginationState.totalPages,
                }}
            />
        </div>
    );
};

export default SearchPage;
