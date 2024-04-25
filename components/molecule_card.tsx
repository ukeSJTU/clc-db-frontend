import React from "react";

import {
    simplifiedMoleculeProps,
    overviewCardMoleculeProps,
} from "@/types/molecule";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import ClassTypeBadge from "./class_type_badge";

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

    return (
        <div className="flex flex-col bg-white shadow-md rounded-lg overflow-hidden">
            <Card className="w-full h-full flex flex-col flex-grow">
                <CardHeader className="flex justify-between items-center p-4 border-b">
                    <div className="space-y-1">
                        <CardTitle className="text-lg font-semibold">
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
                            <Skeleton className="h-[200px] rounded-lg" />
                        </div>
                    </div>
                </CardContent>
                <div className="px-4 py-3 bg-gray-50 text-right">
                    <Button
                        variant="outline"
                        color="blue"
                        onClick={handleClick}
                    >
                        View Details
                    </Button>
                </div>
            </Card>
        </div>
    );
};
export default MoleculeCard;
