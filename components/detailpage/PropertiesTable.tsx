import React from "react";
import { MoleculeProps } from "@/types/molecule";
import MoleculeFormulaSpan from "@/components/MoleculeFormulaSpan";

const MoleculePropertiesTable = ({ molecule }: { molecule: MoleculeProps }) => {
    return (
        <div className="overflow-x-auto">
            <h3 className="text-xl font-semibold mb-4">Properties</h3>
            <table className="w-full table-auto">
                <tbody>
                    <tr>
                        <td className="py-2 pr-4 font-semibold">IUPAC Name</td>
                        <td className="py-2">
                            {molecule.smiles_iupac || "N/A"}
                        </td>
                    </tr>
                    <tr>
                        <td className="py-2 pr-4 font-semibold">
                            Molecular Formula
                        </td>
                        <td className="py-2">
                            <MoleculeFormulaSpan
                                formula={molecule.molecule_formula}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="py-2 pr-4 font-semibold">
                            Molecular Weight
                        </td>
                        <td className="py-2">
                            {molecule.molecular_weight || "N/A"}
                        </td>
                    </tr>
                    <tr>
                        <td className="py-2 pr-4 font-semibold">
                            Heavy Atom Count
                        </td>
                        <td className="py-2">
                            {molecule.heavy_atom_count || "N/A"}
                        </td>
                    </tr>
                    <tr>
                        <td className="py-2 pr-4 font-semibold">Ring Count</td>
                        <td className="py-2">{molecule.ring_count || "N/A"}</td>
                    </tr>
                    <tr>
                        <td className="py-2 pr-4 font-semibold">
                            H-Bond Acceptor Count
                        </td>
                        <td className="py-2">
                            {molecule.hydrogen_bond_acceptor_count || "N/A"}
                        </td>
                    </tr>
                    <tr>
                        <td className="py-2 pr-4 font-semibold">
                            H-Bond Donor Count
                        </td>
                        <td className="py-2">
                            {molecule.hydrogen_bond_donor_count || "N/A"}
                        </td>
                    </tr>
                    <tr>
                        <td className="py-2 pr-4 font-semibold">
                            Rotatable Bond Count
                        </td>
                        <td className="py-2">
                            {molecule.rotatable_bond_count || "N/A"}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default MoleculePropertiesTable;
