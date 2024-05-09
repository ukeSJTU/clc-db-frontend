// app/categories/page.tsx
"use client";

import { useEffect, useState } from "react";
import api from "@/utils/api";
import ClassTypeBadge from "@/components/class_type_badge";

interface Category {
    id: number;
    name: string;
}

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
