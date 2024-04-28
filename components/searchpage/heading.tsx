import React from "react";

const SearchHeading = () => {
    return (
        <div className="flex flex-col items-center space-y-2 text-center">
            <h1 className="text-3xl font-bold">Search for a Molecule?</h1>
            <p className="max-w-[600px] text-gray-500 dark:text-gray-400">
                Enter your search query below to find the best match. You can
                search for CAS ID, Name, or SMILE by ticking the checkbox below.
                {/* TODO: later use shared option tables to add CAS ID, Name, SMILE, etc ... */}
            </p>
        </div>
    );
};

export default SearchHeading;
