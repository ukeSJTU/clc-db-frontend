import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";

const SearchBar: React.FC = () => {
    return (
        <div className="relative flex items-center">
            <Input
                className="flex-1 pr-12 pl-8"
                placeholder="Search documentation..."
                type="search"
            />
            <Button className="absolute right-2" variant="ghost">
                {/* TODO: should implement handleSearch callback function */}
                <SearchIcon className="w-5 h-5 text-gray-400 dark:text-gray-500" />
            </Button>
        </div>
    );
};

export default SearchBar;
