import React from "react";
import { Badge } from "@/components/ui/badge";

interface ClassTypeBadgeProps {
    classType: { name: string }; // Expecting a single classType object
}

const dynamicColor = (typeName: string) => {
    const baseColors = [
        "bg-red-100 text-red-800",
        "bg-green-100 text-green-800",
        "bg-blue-100 text-blue-800",
        "bg-yellow-100 text-yellow-800",
    ];
    let hash = 0;
    for (let i = 0; i < typeName.length; i++) {
        hash = typeName.charCodeAt(i) + ((hash << 5) - hash);
    }
    return baseColors[Math.abs(hash) % baseColors.length]; // Use the absolute value of hash to ensure a positive index
};

const ClassTypeBadge: React.FC<ClassTypeBadgeProps> = ({ classType }) => {
    const colorClass = dynamicColor(classType.name);

    return (
        <Badge
            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${colorClass}`}
        >
            {classType.name}
        </Badge>
    );
};

export default ClassTypeBadge;
