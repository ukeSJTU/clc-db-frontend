import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";

interface SearchBarProps {
    query: string;
    setQuery: (query: string) => void;
    handleSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
    query,
    setQuery,
    handleSearch,
}) => {
    return (
        <div className="relative flex items-center">
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
        </div>
    );
};

export default SearchBar;
