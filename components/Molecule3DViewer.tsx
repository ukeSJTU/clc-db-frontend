"use client";

import React, { useRef, useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

type Molecule3DViewerProps = {
    casId: string; // CAS Registry Number as a prop
};

const Molecule3DViewer: React.FC<Molecule3DViewerProps> = ({ casId }) => {
    const viewerRef = useRef<HTMLDivElement | null>(null);
    const [data, setData] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        if (!viewerRef.current || !data) return;

        import("3dmol/build/3Dmol.js")
            .then(($3Dmol) => {
                try {
                    const viewer = new $3Dmol.createViewer(viewerRef.current, {
                        backgroundColor: "white",
                    });
                    viewer.addModel(data, "sdf");
                    viewer.setStyle({}, { stick: {} });
                    viewer.zoomTo();
                    viewer.render();
                    setIsLoading(false);
                } catch (e) {
                    setError("Failed to initialize the molecular viewer.");
                    setIsLoading(false);
                }
            })
            .catch(() => {
                setError("3Dmol.js library could not be loaded.");
                setIsLoading(false);
            });
    }, [data]);

    useEffect(() => {
        setIsLoading(true);
        // Fetch the .sdf file based on the CAS ID
        const fetchData = async () => {
            try {
                const response = await fetch(`/all_sdfs/${casId}.sdf`);
                if (!response.ok)
                    throw new Error("Network response was not ok.");
                const textData = await response.text();
                setData(textData);
                setError(null); // Clear any previous errors on successful data fetch
            } catch (e) {
                setData(null);
                setError("Failed to load .sdf data.");
                setIsLoading(false);
            }
        };

        fetchData();
    }, [casId]);

    return (
        <div>
            {error ? (
                <div>
                    <Skeleton className="h-[400px]" />
                </div>
            ) : (
                <div
                    style={{
                        position: "relative",
                        width: "400px",
                        height: "400px",
                    }}
                    ref={viewerRef}
                >
                    {isLoading && <Skeleton className="h-[400px]" />}
                </div>
            )}
        </div>
    );
};

export default Molecule3DViewer;
