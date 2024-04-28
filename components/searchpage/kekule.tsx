"use client";

import { Button } from "@/components/ui/button";
import { Kekule } from "kekule";
import "kekule/theme/default";
import React, { useEffect, useRef, useState } from "react";

interface KekuleComponentProps {
    onSmilesInput: (smiles: string) => void;
    onClose: () => void;
}

const KekuleComponent: React.FC<KekuleComponentProps> = ({
    onSmilesInput,
    onClose,
}) => {
    const containerRef = useRef(null); // DOM container for the composer
    const composerRef = useRef(null); // Ref to store the composer instance
    const [smiles, setSmiles] = useState(""); // State to store SMILES string

    useEffect(() => {
        // Initialize the Composer only once and store it in the ref
        if (containerRef.current && !composerRef.current) {
            let composer = new Kekule.Editor.Composer(containerRef.current);
            composer.setDimension("600px", "400px");
            composerRef.current = composer; // Store the composer instance
        }
    }, []);

    // Function to log molecule info
    const logMoleculeInfo = () => {
        if (composerRef.current) {
            const chemDoc = composerRef.current.getChemObj();
            const mol = chemDoc.getChildAt(0); // Assuming the molecule is the first child
            const newSmiles = Kekule.IO.saveFormatData(mol, "smi");
            console.log("SMILES: ", newSmiles);
            setSmiles(newSmiles); // Update state
            onSmilesInput(newSmiles); // Call the onSmilesInput prop with the SMILES string

            // close the dropdown
            onClose();
        } else {
            console.log("Composer not initialized");
        }
    };

    return (
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <div
                ref={containerRef}
                style={{ width: "600px", height: "400px" }}
            ></div>
            <div className="flex justify-between items-center mt-4">
                <Button onClick={logMoleculeInfo}>Log Molecule Info</Button>
                <Button onClick={onClose} className="ml-4">
                    Close
                </Button>
            </div>
        </div>
    );
};

export default KekuleComponent;
