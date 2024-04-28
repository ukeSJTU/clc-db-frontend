import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchIcon, SquarePlus } from "lucide-react";
import KekuleComponent from "@/app/(extJS)/externalJS/kekule/page";

interface SearchBarProps {
    query: string;
    setQuery: (query: string) => void;
    handleSearch: () => void;
    onSmilesInput: (smiles: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
    query,
    setQuery,
    handleSearch,
    onSmilesInput,
}) => {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <div className="relative flex items-center">
            <Button
                className="relative left-2"
                variant="ghost"
                onClick={() => setShowDropdown(!showDropdown)}
            >
                <SquarePlus className="w-5 h-5 text-gray-400 dark:text-gray-500" />
            </Button>

            <Input
                value={query} // Binds input value to query state
                onChange={(e) => setQuery(e.target.value)} // Updates state on input change
                className="flex-1 pr-12 pl-8"
                placeholder="Search documentation..."
                type="search"
            />

            <Button
                className="absolute right-2"
                variant="ghost"
                onClick={handleSearch}
            >
                {/* TODO: should implement handleSearch callback function */}
                <SearchIcon className="w-5 h-5 text-gray-400 dark:text-gray-500" />
            </Button>
            {showDropdown && (
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center backdrop-blur-sm z-50">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
                        <KekuleComponent onSmilesInput={onSmilesInput} />
                        <Button
                            className="mt-4"
                            variant="ghost"
                            onClick={() => setShowDropdown(false)}
                        >
                            Close
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchBar;
