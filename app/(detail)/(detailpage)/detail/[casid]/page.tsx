"use client";
import React, { useState, useEffect, useRef } from "react";
import api from "@/utils/api";
import { MoleculeProps } from "@/types/molecule";
import { SelectDownloadButton } from "@/components/DownloadButtons";
import TableOfContentsNav from "@/components/detailpage/TableOfContentsNav";
import MoleculeHeader from "@/components/detailpage/MoleculeHeader";
import MoleculeImageViewer from "@/components/detailpage/MoleculeImageViewer";
import Molecule3DViewer from "@/components/Molecule3DViewer";
import MoleculeCategory from "@/components/detailpage/MoleculeCategory";
import MoleculeSmiles from "@/components/detailpage/MoleculeSmiles";
import MoleculeSmileTypes from "@/components/detailpage/MoleculeSmileTypes";
import MoleculeDescription from "@/components/detailpage/MoleculeDescription";
import MoleculeURLs from "@/components/detailpage/MoleculeURLs";

const sections = [
    { id: "molecule-name", label: "Molecule Name" },
    { id: "cas-id", label: "CAS ID" },
    { id: "class-type", label: "Class Type" },
    { id: "image", label: "Image" },
    { id: "structure", label: "3D Structure" },
    { id: "smile", label: "SMILE" },
    { id: "smile-type", label: "SMILE Type" },
    { id: "description", label: "Description" },
    { id: "urls", label: "URLs" },
];

const MoleculeDetailPage = ({ params }: { params: { casid: string } }) => {
    const [molecule, setMolecule] = useState<MoleculeProps | null>(null);
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleSearch = async () => {
            try {
                const response = await api.get(
                    `/search/molecules?cas_id=${params.casid}`
                );
                const { results } = response.data;
                if (results.length > 0) {
                    setMolecule(results[0]);
                } else {
                    setMolecule(null);
                }
            } catch (error) {
                console.error("Failed to fetch molecules", error);
                setMolecule(null);
            }
        };

        handleSearch();
    }, [params.casid]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.pageYOffset + window.innerHeight / 2;
            const sections = Array.from(
                contentRef.current?.querySelectorAll("section") || []
            );

            const activeSection = sections.findLast((section) => {
                const sectionTop = section.offsetTop;
                const sectionBottom = sectionTop + section.offsetHeight;
                return (
                    scrollPosition >= sectionTop &&
                    scrollPosition < sectionBottom
                );
            });

            setActiveSection(activeSection?.id || null);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!molecule) {
        return <div>Loading...</div>;
    }

    const sdfFiles = [`/all_sdfs/${molecule.cas_id}.sdf`];

    return (
        <div className="grid grid-cols-[250px_1fr] gap-4 lg:gap-8 p-4 lg:p-8 relative">
            {/* Table of Contents */}
            <TableOfContentsNav sections={sections} />

            {/* Main content */}
            <div
                ref={contentRef}
                className="overflow-y-auto rounded-lg border border-gray-200 bg-white p-4 lg:p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950"
            >
                {/* Download Button positioned above the main content */}
                <div className="mb-4 flex justify-end">
                    <SelectDownloadButton
                        molecules={[molecule]}
                        sdfFiles={sdfFiles}
                    />
                </div>

                {/* Sections displaying molecule details */}
                <div className="space-y-8">
                    <section id="molecule-name">
                        <MoleculeHeader molecule={molecule} />
                    </section>
                    <section id="cas-id">
                        <p className="text-xl font-semibold">CAS ID</p>
                        <p>{molecule.cas_id || "N/A"}</p>
                    </section>
                    <section id="class-type">
                        <MoleculeCategory molecule={molecule} />
                    </section>
                    <section id="image">
                        <MoleculeImageViewer molecule={molecule} />
                    </section>
                    <section id="structure">
                        <h3 className="text-xl font-semibold">3D Structure</h3>
                        <div className="h-[200px] rounded-lg">
                            <Molecule3DViewer casId={molecule.cas_id} />
                        </div>
                    </section>
                    <section id="smile">
                        <MoleculeSmiles molecule={molecule} />
                    </section>
                    <section id="smile-type">
                        <MoleculeSmileTypes molecule={molecule} />
                    </section>
                    <section id="description">
                        <MoleculeDescription molecule={molecule} />
                    </section>
                    <section id="urls">
                        <MoleculeURLs molecule={molecule} />
                    </section>
                </div>
            </div>
        </div>
    );
};

export default MoleculeDetailPage;
