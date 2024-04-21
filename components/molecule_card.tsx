import React from "react";

import { simplifiedMoleculeProps } from "@/types/molecule";
import { useRouter } from "next/navigation";

const MoleculeCard = ({
    name,
    cas_id,
    class_type,
}: simplifiedMoleculeProps) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/detail/${cas_id}`);
    };

    return (
        <div
            className="bg-white p-4 shadow-md rounded-md hover:shadow-lg cursor-pointer"
            onClick={handleClick}
        >
            <h2 className="text-2xl font-semibold mb-2 truncate">{name}</h2>
            <p className="text-gray-600">CAS ID: {cas_id}</p>
            <p className="text-gray-600">
                Class Type:{" "}
                {class_type.map((type, index) => (
                    <span key={index}>
                        {type.name}
                        {index < class_type.length - 1 ? ", " : ""}
                    </span>
                ))}
            </p>
        </div>
    );
};

export default MoleculeCard;
