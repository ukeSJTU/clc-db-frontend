import React from "react";

interface LayoutSwitchProps {
    currentLayout: "grid" | "table";
    onToggleLayout: (layout: "grid" | "table") => void;
}

const LayoutSwitch: React.FC<LayoutSwitchProps> = ({
    currentLayout,
    onToggleLayout,
}) => {
    return (
        <div className="flex justify-center items-center gap-2">
            <button
                className={`px-4 py-2 ${
                    currentLayout === "grid"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                }`}
                onClick={() => onToggleLayout("grid")}
            >
                Grid Layout
            </button>
            <button
                className={`px-4 py-2 ${
                    currentLayout === "table"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                }`}
                onClick={() => onToggleLayout("table")}
            >
                Table Layout
            </button>
        </div>
    );
};

export default LayoutSwitch;
