"use client";

import React, { useState } from "react";
import api from "@/utils/api";

import { MoleculeProps } from "@/types/molecule";
import MoleculeDetailSheet from "@/components/detailpage/detail_molecule";

const MoleculeDetailPage = ({ params }: { params: { casid: string } }) => {
    const [molecule, setResults] = useState<MoleculeProps[]>([]);

    React.useEffect(() => {
        const handleSearch = async () => {
            try {
                const response = await api.get(
                    `/search/molecules?cas_id=${params.casid}`
                );
                // console.log(response.data);
                setResults(response.data.results);
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
