import { MoleculeProps } from "@/types/molecule";

const escapeCsvField = (field: string): string => {
    if (field.includes(",") || field.includes('"') || field.includes("\n")) {
        return `"${field.replace(/"/g, '""')}"`;
    }
    return field;
};

const downloadMolecule = (molecule: MoleculeProps) => {
    const csvHeaders = [
        "Name",
        "CAS ID",
        "Class Type(s)",
        "Molecule Formula",
        "Molecular Weight",
    ];

    const classTypes =
        molecule.class_type.map((type) => type.name).join(", ") || "";
    const data = [
        escapeCsvField(molecule.name || ""),
        escapeCsvField(molecule.cas_id || ""),
        escapeCsvField(classTypes),
        escapeCsvField(molecule.molecule_formula || ""),
        molecule.molecular_weight ? molecule.molecular_weight.toFixed(3) : "",
    ];

    const csvContent = [csvHeaders, data]
        .map((row) => row.join(","))
        .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.href = url;
    link.download = `${molecule.name || "molecule"}.csv`;
    link.click();

    URL.revokeObjectURL(url);
};

export default downloadMolecule;
