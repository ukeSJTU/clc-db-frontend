import React from "react";
import { useRouter } from "next/navigation";
import {
    simplifiedMoleculeProps,
    overviewCardMoleculeProps,
} from "@/types/molecule";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ClassTypeBadge from "./class_type_badge";
import Molecule3DViewer from "@/components/Molecule3DViewer";

const escapeCsvField = (field: string): string => {
    if (field.includes(",") || field.includes('"') || field.includes("\n")) {
        return `"${field.replace(/"/g, '""')}"`;
    }
    return field;
};
const downloadMolecule = (molecule: overviewCardMoleculeProps) => {
    const csvHeaders = [
        "Name",
        "CAS ID",
        "Class Type(s)",
        "Molecule Formula",
        "Molecular Weight",
    ];

    const classTypes =
        molecule.class_type.map((type) => type.name).join(", ") || "";
    const data = [
        escapeCsvField(molecule.name || ""),
        escapeCsvField(molecule.cas_id || ""),
        escapeCsvField(classTypes),
        escapeCsvField(molecule.molecule_formula || ""),
        molecule.molecular_weight ? molecule.molecular_weight.toFixed(3) : "",
    ];

    const csvContent = [csvHeaders, data]
        .map((row) => row.join(","))
        .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.href = url;
    link.download = `${molecule.name || "molecule"}.csv`;
    link.click();

    URL.revokeObjectURL(url);
};

const MoleculeCard = ({
    name,
    cas_id,
    class_type,
    molecule_formula,
    molecular_weight,
}: overviewCardMoleculeProps) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/detail/${cas_id}`);
    };

    const handleDownload = () => {
        const molecule = {
            name,
            cas_id,
            class_type,
            molecule_formula,
            molecular_weight,
        };
        downloadMolecule(molecule);
    };

    return (
        <div className="flex flex-col bg-white shadow-md rounded-lg overflow-hidden">
            <Card className="w-full h-full flex flex-col flex-grow">
                <CardHeader
                    className="flex justify-between items-start p-4 border-b"
                    style={{ height: "40%" }}
                >
                    <div className="space-y-1">
                        <CardTitle className="text-lg font-semibold ">
                            {name}
                        </CardTitle>
                        <p className="text-sm text-gray-500">
                            CAS ID: {cas_id}
                        </p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <p className="font-semibold">Category:</p>
                        <div className="flex flex-wrap">
                            {class_type.map((type, index) => (
                                <ClassTypeBadge key={index} classType={type} />
                            ))}
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-4 flex-grow">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <p className="text-sm text-gray-500">
                                Molecule Formula
                            </p>
                            <p>{molecule_formula}</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-sm text-gray-500">
                                Molecular Weight
                            </p>
                            <p>{molecular_weight.toFixed(3)}</p>
                        </div>
                        <div className="space-y-2 col-span-2">
                            <p className="text-sm text-gray-500">
                                3D Structure
                            </p>
                            {/* TODO: some molecules don't have corresponding [cas-id].sdf 
                                file to generate Molecule3DViewer component, 
                                so either retrive the pubchem cid and use fallback component 
                                or simply use Skeleton as placeholder */}
                            {/* <Skeleton className="h-[200px] rounded-lg" /> */}
                            <div className="h-[200px] rounded-lg">
                                <Molecule3DViewer casId={cas_id} />
                            </div>
                            {/* <Molecule3DViewer casId={cas_id} /> */}
                        </div>
                    </div>
                </CardContent>
                <div className="px-4 py-3 bg-gray-50 text-right flex gap-2 justify-between">
                    {/* Download  Button */}
                    <Button
                        variant="outline"
                        color="green"
                        onClick={handleDownload}
                    >
                        Download
                    </Button>

                    {/* View Details Button */}
                    <Button
                        variant="outline"
                        color="blue"
                        onClick={handleClick}
                    >
                        View
                    </Button>
                </div>
            </Card>
        </div>
    );
};

export default MoleculeCard;
