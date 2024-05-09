// app/categories/page.tsx
"use client";

import { MoleculeProps } from "@/types/molecule";
import React, { useEffect, useState } from "react";
import axios from "axios";

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
        <div className="grid grid-cols-2 gap-4">
            {categories.map((category) => (
                <div key={category.id}>
                    <ClassTypeBadge
                        classType={{ name: category.name }}
                        abbreviate={false}
                    />
                </div>
            ))}
        </div>
    );
};

export default CategoriesPage;
