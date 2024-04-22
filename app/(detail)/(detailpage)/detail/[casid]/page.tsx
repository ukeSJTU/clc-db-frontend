"use client";

// components/MoleculeDetailPage.tsx
import React, { useState } from "react";
import axios from "axios";

import { completeMoleculeProps } from "@/types/molecule";
import MoleculeDetailSheet from "@/components/detail_molecule";

const MoleculeDetailPage = ({ params }: { params: { casid: string } }) => {
    const [molecule, setResults] = useState<completeMoleculeProps[]>([]);

    React.useEffect(() => {
        const handleSearch = async () => {
            try {
                const response = await axios.get(
                    `http://www.ukehome.top/api/search/molecules/?search=${params.casid}`
                );
                setResults(response.data);
            } catch (error) {
                console.error("Failed to fetch molecules", error);
                setResults([]);
            }
        };

        handleSearch();
    }, [params.casid]);

    return (
        <div className="container mx-auto px-4 py-8">
            {molecule.length > 0 && <MoleculeDetailSheet {...molecule[0]} />}
        </div>
    );
};

export default MoleculeDetailPage;
