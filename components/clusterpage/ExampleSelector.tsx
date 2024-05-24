import React from "react";
import { Button } from "@/components/ui/button";

interface ExampleSelectorProps {
    onExampleClick: (exampleType: string) => void;
    isLoading: boolean;
}

const ExampleSelector: React.FC<ExampleSelectorProps> = ({
    onExampleClick,
    isLoading,
}) => {
    return (
        <div className="flex flex-row items-center space-x-4">
            <h3 className="text-lg font-semibold">Select an Example:</h3>
            <div className="space-x-2 flex flex-row">
                <Button
                    onClick={() => onExampleClick("default")}
                    disabled={isLoading}
                >
                    E3FP Example
                </Button>
                <Button
                    onClick={() => onExampleClick("knn")}
                    disabled={isLoading}
                >
                    RDKit Example
                </Button>
            </div>
        </div>
    );
};

export default ExampleSelector;
