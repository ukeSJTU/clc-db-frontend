// components/SearchBar.tsx
import React from "react";

type SearchBarProps = {
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
    handleSearch: () => Promise<void>;
};

const SearchBarComponent: React.FC<SearchBarProps> = ({
    query,
    setQuery,
    handleSearch,
}) => {
    return (
        <div className="flex items-center justify-center p-8">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by CAS ID"
                className="p-2 w-full border rounded shadow-sm"
            />
            <button
                onClick={handleSearch}
                className="ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors"
            >
                Search
            </button>
        </div>
    );
};

export default SearchBarComponent;
