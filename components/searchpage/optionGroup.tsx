"use client";

import React, { useState } from "react";

import SearchOption from "@/components/searchpage/option";

const SearchOptionsGroup = ({
    options,
    setSearchOpt,
}: {
    options: { displayName: string; searchName: string }[];
    setSearchOpt: (opt: string) => void;
}) => {
    const [checkedOption, setCheckedOption] = useState<string | null>(null);

    const handleOptionChange = (optionName: string) => {
        console.log("Option changed to:", optionName);
        setCheckedOption(optionName);
        setSearchOpt(optionName);
    };

    return (
        <div className="flex items-center gap-4">
            {options.map((option, index) => (
                <SearchOption
                    key={index}
                    displayName={option.displayName}
                    searchName={option.searchName}
                    isChecked={option.searchName === checkedOption}
                    onChange={handleOptionChange}
                />
            ))}
        </div>
    );
};

export default SearchOptionsGroup;
