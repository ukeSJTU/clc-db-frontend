"use client";

import React, { useEffect, useRef } from "react";

const Molecule3DStructureDisplayComponent = () => {
    const viewerRef = useRef(null);

    useEffect(() => {
        if (!viewerRef.current) return; // Ensure the ref is attached

        // Dynamically import the 3Dmol library
        import("3dmol/build/3Dmol.js").then(($3Dmol) => {
            // Initialize the viewer in the div ref
            const viewer = new $3Dmol.createViewer(viewerRef.current, {
                backgroundColor: "white",
            });

            // Load the PDB structure by PDB ID
            $3Dmol.download("cid:46939810", viewer, {}, function () {
                // $3Dmol.download("pdb:1YCR", viewer, {}, function () {
                viewer.setStyle({}, { stick: {} });
                viewer.zoomTo(); // Adjust camera to molecule
                viewer.render(); // Render the scene
            });
        });
    }, []);

    return (
        <div style={{ width: "400px", height: "400px" }} ref={viewerRef}></div>
    );
};

export default Molecule3DStructureDisplayComponent;
