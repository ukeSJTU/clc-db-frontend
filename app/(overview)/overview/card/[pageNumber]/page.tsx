"use client";

import { PaginationComponent } from "@/components/Pagination";
import { useState, useEffect } from "react";
import api from "@/utils/api";
import OverviewContainer from "@/components/OverviewContainer";
import CategorySelector from "@/components/CategorySelector";

const fetchMoleculeData = async (
    page: number,
    pageSize: number,
    category: string
) => {
    if (category === "all") {
        category = "";
    }
    const url = `/search/molecules/?page=${page}&page_size=${pageSize}${
        category ? `&category=${encodeURIComponent(category)}` : ""
    }`;
    console.log(url);
    const response = await api.get(url);
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
    const [selectedCategory, setSelectedCategory] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const { results, totalPages } = await fetchMoleculeData(
                page,
                pageSize,
                selectedCategory
            );
            setMolecules(results);
            setTotalPages(totalPages);
        };
        fetchData();
    }, [page, pageSize, selectedCategory]);

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
        setPage(1); // Reset to the first page when changing the category
    };

    return (
        <div className="max-w-6xl mx-auto p-4">
            {/* Header with centered Title */}
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 text-center mb-4">
                Molecule Overview
            </h2>

            <div className="flex justify-between items-center mb-4">
                {/* Left: Category Selector */}
                <div className="flex-1 pr-8">
                    <CategorySelector
                        selectedCategory={selectedCategory}
                        onCategoryChange={handleCategoryChange}
                    />
                </div>

                {/* Right: Pagination Component */}
                <div className="flex-1 pl-8">
                    <PaginationComponent
                        page={page}
                        setPage={setPage}
                        pageSize={pageSize}
                        setPageSize={setPageSize}
                        totalPages={totalPages}
                    />
                </div>
            </div>

            {/* Overview Container for results */}
            <OverviewContainer molecules={molecules} useLayoutSwitch={false} />
        </div>
    );
};

export default IndexPage;
