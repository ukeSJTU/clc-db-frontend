"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useRef, useState } from "react";

const Molecule3DStructureDisplayComponent = () => {
    const viewerRef = useRef(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        if (!viewerRef.current || !data) return;

        import("3dmol/build/3Dmol.js").then(($3Dmol) => {
            const viewer = new $3Dmol.createViewer(viewerRef.current, {
                backgroundColor: "white",
            });
            viewer.addModel(data, "sdf"); // Assuming data is in SDF format
            viewer.setStyle({}, { stick: {} });
            viewer.zoomTo();
            viewer.render();
        });
    }, [data]);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setData(e.target.result);
            };
            reader.readAsText(file);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} accept=".sdf" />
            <div
                style={{ width: "400px", height: "400px" }}
                ref={viewerRef}
            ></div>
        </div>
    );
};

export default Molecule3DStructureDisplayComponent;
