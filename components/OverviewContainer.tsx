"use client";

import React, { useState } from "react";
import { MoleculeProps } from "@/types/molecule";
import {
    MolecularGridLayout,
    MolecularTableLayout,
} from "@/components/OverviewLayouts";
import LayoutSwitch from "@/components/LayoutSwitch";

interface SearchResultsContainerProps {
    molecules: MoleculeProps[];
    initialLayout?: "grid" | "table"; // Optional prop to set initial layout
    useLayoutSwitch?: boolean; // Optional prop to enable layout switch
}

const OverviewContainer: React.FC<SearchResultsContainerProps> = ({
    molecules,
    initialLayout = "grid",
    useLayoutSwitch = true,
}) => {
    const [layout, setLayout] = useState<"grid" | "table">(initialLayout);

    if (molecules.length === 0) {
        return (
            <div className="col-span-full text-center text-gray-500 dark:text-gray-300">
                No results found.
            </div>
        );
    }

    return (
        <div className="flex flex-col">
            {layout === "grid" ? (
                <MolecularGridLayout molecules={molecules} />
            ) : (
                <MolecularTableLayout molecules={molecules} />
            )}
            <div className="pt-2">
                {useLayoutSwitch && (
                    <LayoutSwitch
                        currentLayout={layout}
                        onToggleLayout={setLayout}
                    />
                )}
            </div>
        </div>
    );
};

export default OverviewContainer;
