import React from "react";
import { useRouter } from "next/navigation";
import { MoleculeProps } from "@/types/molecule";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    SelectDownloadButton,
    ZipDownloadButton,
    BulkMoleculeDownloadButton,
} from "@/components/DownloadButtons";
import Image from "next/image";
import CategoryBadge from "./CategoryBadge";
import Molecule3DViewer from "@/components/Molecule3DViewer";
import downloadMolecule from "@/lib/download";
import MoleculeFormulaSpan from "./MoleculeFormulaText";

const MoleculeCard = (molecule: MoleculeProps) => {
    const router = useRouter();
    const sdfFiles = [`/all_sdfs/${molecule.cas_id}.sdf`];

    const handleClick = () => {
        router.push(`/detail/${molecule.cas_id}`);
    };

    const handleDownload = () => {
        // const molecule = {
        //     name,
        //     cas_id,
        //     class_type,
        //     molecule_formula,
        //     molecular_weight,
        // };
        downloadMolecule("zip", [molecule], sdfFiles);
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
                            {molecule.name}
                        </CardTitle>
                        <p className="text-sm text-gray-500">
                            CAS ID: {molecule.cas_id}
                        </p>
                    </div>
                    <div className="flex flex-col items-start">
                        {/* <p className="font-semibold">Category</p> */}
                        <div className="flex flex-wrap">
                            {molecule.class_type.map((type, index) => (
                                <CategoryBadge
                                    key={index}
                                    classType={type}
                                    abbreviate={false}
                                />
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
                            <MoleculeFormulaSpan
                                formula={molecule.molecule_formula}
                            />
                            {/* <p>{molecule.molecule_formula}</p> */}
                        </div>
                        <div className="space-y-2">
                            <p className="text-sm text-gray-500">
                                Molecular Weight
                            </p>
                            <p>
                                {molecule.molecular_weight !== undefined
                                    ? molecule.molecular_weight.toFixed(3)
                                    : "N/A"}
                            </p>
                        </div>
                        <div className="space-y-2 col-span-2">
                            <p className="text-sm text-gray-500">
                                2/3D Structure
                            </p>

                            <div
                                style={{
                                    width: "230px",
                                    height: "250px",
                                    position: "relative",
                                }}
                            >
                                <Image
                                    alt="2D Image"
                                    src={`https://pubchem.ncbi.nlm.nih.gov/image/imagefly.cgi?cid=${molecule.pubchem_cid}&width=500&height=500`}
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                            {/* <div className="h-[200px] rounded-lg">
                                <Molecule3DViewer casId={molecule.cas_id} />
                            </div> */}
                        </div>
                    </div>
                </CardContent>
                <div className="px-4 py-3 bg-gray-50 text-right flex gap-2 justify-between">
                    {/* Download  Button */}
                    <ZipDownloadButton
                        molecules={[molecule]}
                        sdfFiles={sdfFiles}
                    />
                    {/* View Details Button */}
                    <Button
                        variant="outline"
                        color="blue"
                        onClick={handleClick}
                    >
                        Detail
                    </Button>
                </div>
            </Card>
        </div>
    );
};

export default MoleculeCard;
