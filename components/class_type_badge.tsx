import React from "react";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";

interface ClassTypeBadgeProps {
    classType: { name: string }; // Expecting a single classType object
    abbreviate?: boolean; // Optional prop to control if the name should be abbreviated
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

const abbreviateName = (name: string) => {
    return name
        .split(/\s+/)
        .map((word) => word[0])
        .join("")
        .toUpperCase(); // Create an abbreviation by taking the first letter of each word
};

const ClassTypeBadge: React.FC<ClassTypeBadgeProps> = ({
    classType,
    abbreviate = true,
}) => {
    const router = useRouter();
    const colorClass = dynamicColor(classType.name);
    const displayText = abbreviate
        ? abbreviateName(classType.name)
        : classType.name;

    const handleBadgeClick = (name: string) => {
        router.push(`/download/classtypes/${name}`);
    };

    return (
        <Badge
            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${colorClass}`}
            title={classType.name}
            onClick={() => handleBadgeClick(classType.name)}
        >
            {displayText}
        </Badge>
    );
};

export default ClassTypeBadge;
