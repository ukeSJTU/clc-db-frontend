import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { MoleculeProps } from "@/types/molecule";
import downloadMolecule from "@/lib/download";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CategoryBadge from "@/components/CategoryBadge";
import { ZipDownloadButton } from "@/components/DownloadButtons";
import MoleculeFormulaSpan from "@/components/MoleculeFormulaSpan";
import MoleculeCard from "@/components/MoleculeCard";

// A number of molecules to be displayed
type MoleculesProps = {
    molecules: MoleculeProps[];
};

// This component displays the molecules in a table layout
const MolecularTableLayout = ({ molecules }: MoleculesProps) => {
    const router = useRouter();

    const handleClick = (cas_id: string) => {
        router.push(`/detail/${cas_id}`);
    };

    return (
        <div className="overflow-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            CAS ID
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Class Type
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Operations
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {molecules.map((molecule, index) => (
                        <tr key={index} className="hover:bg-gray-300/10">
                            {/* Name column with ellipsis if too long */}
                            <td className="px-6 py-4 max-w-xs overflow-hidden text-ellipsis whitespace-nowrap">
                                {molecule.name}
                            </td>
                            {/* CAS ID column without truncation */}
                            <td className="px-6 py-4 whitespace-nowrap">
                                {molecule.cas_id}
                            </td>
                            {/* Class Type column with ellipsis */}
                            <td className="px-6 py-4 max-w-xs overflow-hidden text-ellipsis whitespace-nowrap">
                                {molecule.class_type.length > 0 ? (
                                    molecule.class_type.map((type, idx) => (
                                        <CategoryBadge
                                            key={idx}
                                            classType={type}
                                        />
                                    ))
                                ) : (
                                    <CategoryBadge
                                        classType={{ name: "None" }}
                                    />
                                )}
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex flex-row justify-start space-x-2">
                                    {/* Download  Button */}
                                    <ZipDownloadButton
                                        molecules={[molecule]}
                                        sdfFiles={[
                                            `/all_sdfs/${molecule.cas_id}.sdf`,
                                        ]}
                                    />
                                    {/* View Details Button */}
                                    <Button
                                        variant="outline"
                                        color="blue"
                                        onClick={() =>
                                            handleClick(molecule.cas_id)
                                        }
                                    >
                                        Detail
                                    </Button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

// This component displays the molecules in a grid layout, each is a card
const MolecularGridLayout = ({ molecules }: MoleculesProps) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto p-4">
            {molecules.map((molecule: MoleculeProps, index: number) => (
                <MoleculeCard key={index} {...molecule} />
            ))}
        </div>
    );
};

export { MolecularTableLayout, MolecularGridLayout };
