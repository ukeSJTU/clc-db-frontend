"use client";

import { Kekule } from "kekule";
import "kekule/theme/default";
import React, { useEffect, useRef } from "react";

const KekuleComponent = () => {
    const containerRef = useRef(null); // DOM container for the composer
    const composerRef = useRef(null); // Ref to store the composer instance

    useEffect(() => {
        // Initialize the Composer only once and store it in the ref
        if (containerRef.current && !composerRef.current) {
            let composer = new Kekule.Editor.Composer(containerRef.current);
            composer.setDimension("600px", "400px");
            composerRef.current = composer; // Store the composer instance

            // Optional: Load a default molecule or setup composer here
            // This is a good place to set up your initial molecule if needed
        }
    }, []);

    // Function to log molecule info
    const logMoleculeInfo = () => {
        if (composerRef.current) {
            const chemDoc = composerRef.current.getChemObj();
            const mol = chemDoc.getChildAt(0); // Assuming the molecule is the first child
            const smiles = Kekule.IO.saveFormatData(mol, "smi");
            console.log("SMILES: ", smiles);
        } else {
            console.log("Composer not initialized");
        }
    };

    return (
        <div>
            <div
                ref={containerRef}
                style={{ width: "600px", height: "400px" }}
            ></div>
            <button onClick={logMoleculeInfo}>Log Molecule Info</button>
        </div>
    );
};

export default KekuleComponent;
