// lib/download.ts

import { MoleculeProps } from "@/types/molecule";
import JSZip from "jszip";
import { saveAs } from "file-saver";

const escapeCsvField = (field: string): string => {
    if (field.includes(",") || field.includes('"') || field.includes("\n")) {
        return `"${field.replace(/"/g, '""')}"`;
    }
    return field;
};

const generateCsvContent = (molecules: MoleculeProps[]) => {
    const csvHeaders = [
        "Name",
        "CAS ID",
        "Class Type(s)",
        "Molecule Formula",
        "Molecular Weight",
    ];

    const csvRows = molecules.map((molecule) => {
        const classTypes =
            molecule.class_type.map((type) => type.name).join(", ") || "";
        return [
            escapeCsvField(molecule.name || ""),
            escapeCsvField(molecule.cas_id || ""),
            escapeCsvField(classTypes),
            escapeCsvField(molecule.molecule_formula || ""),
            molecule.molecular_weight
                ? molecule.molecular_weight.toFixed(3)
                : "",
        ];
    });

    return [csvHeaders, ...csvRows].map((row) => row.join(",")).join("\n");
};

const downloadCsv = (molecules: MoleculeProps[]) => {
    const csvContent = generateCsvContent(molecules);
    const defaultFileName =
        molecules.length === 1 ? molecules[0].cas_id : "molecules";
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, `${defaultFileName}.csv`);
};

const downloadSdf = async (
    sdfFiles: string[],
    defaultFileName: string = "molecules_sdf"
) => {
    const zip = new JSZip();

    for (const [index, sdfUrl] of sdfFiles.entries()) {
        const response = await fetch(sdfUrl);
        const text = await response.text();
        zip.file(`molecule_${index + 1}.sdf`, text);
    }

    const blob = await zip.generateAsync({ type: "blob" });
    saveAs(blob, `${defaultFileName}.zip`);
};

const downloadBoth = async (molecules: MoleculeProps[], sdfFiles: string[]) => {
    const zip = new JSZip();

    // Use CAS ID of the first molecule or a generic name if more than one
    const defaultFileName =
        molecules.length === 1 ? molecules[0].cas_id : "molecules_data";

    // Add CSV file
    const csvContent = generateCsvContent(molecules);
    zip.file("molecules.csv", csvContent);

    // Add SDF files
    for (const [index, sdfUrl] of sdfFiles.entries()) {
        const response = await fetch(sdfUrl);
        const text = await response.text();
        zip.file(`molecule_${index + 1}.sdf`, text);
    }

    const blob = await zip.generateAsync({ type: "blob" });
    saveAs(blob, `${defaultFileName}.zip`);
};

const downloadFiles = (
    type: string,
    molecules: MoleculeProps[],
    sdfFiles: string[]
) => {
    const defaultFileName =
        molecules.length === 1 ? molecules[0].cas_id : "molecules";

    switch (type) {
        case "csv":
            downloadCsv(molecules);
            break;
        case "sdf":
            downloadSdf(sdfFiles, defaultFileName);
            break;
        case "zip":
            downloadBoth(molecules, sdfFiles);
            break;
        default:
            console.error("Unknown download type:", type);
    }
};

export default downloadFiles;
