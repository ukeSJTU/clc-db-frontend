import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface SearchOptionProps {
    name: string;
    icon?: string;
}

const SearchOption: React.FC<SearchOptionProps> = ({ name, icon }) => {
    return (
        <div className="flex items-center gap-2">
            <Checkbox id={name} />
            <Label htmlFor={name}>{name}</Label>

            {/* {icon && <img src={icon} alt={name} />} */}
        </div>
    );
};

export default SearchOption;
