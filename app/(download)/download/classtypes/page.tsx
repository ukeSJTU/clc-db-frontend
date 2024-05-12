// This is the page to display all available class types for download

"use client";

import { Category, MoleculeProps } from "@/types/molecule";
import React, { useEffect, useState } from "react";
import api from "@/utils/api";
import CategoryBadge from "@/components/CategoryBadge";

type ClassTypeGroup = {
    class_type: string;
    molecules: MoleculeProps[];
};

const CategoriesPage = () => {
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        // Fetch categories from your API
        const fetchCategories = async () => {
            const response = api.get("/categories/");
            const data = (await response).data;
            setCategories(data);
        };

        fetchCategories();
    }, []);

    const handleDownload = async (
        molecules: MoleculeProps[],
        class_type: string
    ): Promise<void> => {
        // Prepare the molecule data for download
        const jsonString = JSON.stringify({ class_type, molecules }, null, 2);
        const blob = new Blob([jsonString], { type: "application/json" });
        const url = URL.createObjectURL(blob);

        // Create and trigger a download action
        const a = document.createElement("a");
        a.href = url;
        a.download = `${class_type}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        // Clean up the URL
        URL.revokeObjectURL(url);
    };

    return (
        <div className="flex flex-col items-center p-4">
            <h1 className="text-2xl font-bold mb-6">Available Class Types</h1>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
                {categories.map((category) => (
                    <CategoryBadge
                        key={category.id}
                        classType={{ name: category.name }}
                        abbreviate={false}
                    />
                ))}
            </div>
        </div>
    );
};

export default CategoriesPage;
