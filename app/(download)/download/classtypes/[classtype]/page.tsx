// app/categories/[classtype]/page.tsx
"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import MoleculeCard from "@/components/molecule_card";
import { PaginationComponent } from "@/components/pagination";
import { overviewCardMoleculeProps } from "@/types/molecule";
import ClassTypeBadge from "@/components/class_type_badge";
import api from "@/utils/api";

interface Molecule {
    name: string;
    cas_id: string;
    class_type: { name: string }[];
    molecule_formula: string;
    molecular_weight: number;
}

const ClassTypePage = ({ params }: { params: { classtype: string } }) => {
    const [molecules, setMolecules] = useState<Molecule[]>([]);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [totalPages, setTotalPages] = useState(0);

    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        const fetchMolecules = async () => {
            const response = await api.get(
                `/search/molecules?class_type=${params.classtype}&page=${page}&page_size=${pageSize}`
            );

            const data = response.data;
            setMolecules(data.results);
            setTotalPages(Math.ceil(data.count / pageSize));
        };

        fetchMolecules();
    }, [params.classtype, page, pageSize]);

    return (
        <div className="flex flex-col gap-4">
            <div className="mt-4 flex justify-between items-center">
                <div className="flex flex-row justify-start">
                    {/* Left: Title or additional information */}
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 px-3">
                        Searching for Molecules of:
                    </h2>
                    <ClassTypeBadge
                        classType={{
                            name: decodeURIComponent(params.classtype),
                        }}
                        abbreviate={false}
                    />
                </div>
                {/* Right: Pagination Component */}
                <PaginationComponent
                    page={page}
                    setPage={setPage}
                    pageSize={pageSize}
                    setPageSize={setPageSize}
                    totalPages={totalPages}
                />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {molecules.map((molecule, index) => (
                    <MoleculeCard key={index} {...molecule} />
                ))}
            </div>
        </div>
    );
};

export default ClassTypePage;
