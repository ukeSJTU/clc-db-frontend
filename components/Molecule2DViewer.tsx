"use client";

import { useState } from "react";
import { MoleculeProps } from "@/types/molecule";
import Image from "next/image";

const Molecule2DViewer = ({ molecule }: { molecule: MoleculeProps }) => {
    // Initial src URL for the image from the backend static service
    const initialImageSrc = `${process.env.NEXT_PUBLIC_STATIC}/2Dimages/${molecule.cas_id}.sdf.png`;

    // State to manage the current image src
    const [imageSrc, setImageSrc] = useState<string>(initialImageSrc);
    // State to manage if the fallback to PubChem has failed
    const [fallbackFailed, setFallbackFailed] = useState<boolean>(false);

    const handleImageError = () => {
        // If the initial image source fails and fallback hasn't been tried yet
        if (imageSrc === initialImageSrc && molecule.pubchem_cid) {
            // Set the src to the PubChem URL
            setImageSrc(
                `https://pubchem.ncbi.nlm.nih.gov/image/imagefly.cgi?cid=${molecule.pubchem_cid}&width=500&height=500`
            );
        } else {
            // If the fallback also fails, set the fallbackFailed state to true
            setFallbackFailed(true);
        }
    };

    return (
        <>
            {molecule.pubchem_cid ? (
                <div
                    style={{
                        width: "230px",
                        height: "250px",
                        position: "relative",
                        backgroundColor: "white",
                    }}
                >
                    {!fallbackFailed ? (
                        <Image
                            alt="2D Image"
                            src={imageSrc}
                            layout="fill"
                            objectFit="contain"
                            onError={handleImageError}
                            style={{ backgroundColor: "white" }}
                        />
                    ) : (
                        <div
                            style={{
                                width: "100%",
                                height: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                color: "#aaa",
                            }}
                        >
                            <p>No 2D image available</p>
                        </div>
                    )}
                </div>
            ) : (
                <div
                    style={{
                        width: "230px",
                        height: "250px",
                        position: "relative",
                        aspectRatio: "1 / 1",
                        backgroundColor: "#f0f0f0",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#aaa",
                    }}
                >
                    <p>No 2D image available</p>
                </div>
            )}
        </>
    );
};

export default Molecule2DViewer;
