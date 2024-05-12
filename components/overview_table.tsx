import React from "react";
import { useRouter } from "next/navigation";
import { MoleculeProps } from "@/types/molecule";
import CategoryBadge from "@/components/CategoryBadge";
import { Button } from "@/components/ui/button";
import { ZipDownloadButton } from "./DownloadButtons";

type MoleculeTableProps = {
    molecules: MoleculeProps[];
};

const MoleculeTable = ({ molecules }: MoleculeTableProps) => {
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

export default MoleculeTable;
