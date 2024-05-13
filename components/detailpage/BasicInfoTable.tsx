import React from "react";
import { MoleculeProps } from "@/types/molecule";

const MoleculeBasicInfoTable = ({ molecule }: { molecule: MoleculeProps }) => {
    return (
        <div className="overflow-x-auto">
            <h3 className="text-xl font-semibold mb-4">Basic Information</h3>
            <table className="w-full table-auto">
                <tbody>
                    <tr>
                        <td className="py-2 pr-4 font-semibold">
                            Molecule Name
                        </td>
                        <td className="py-2">{molecule.name}</td>
                    </tr>
                    <tr>
                        <td className="py-2 pr-4 font-semibold">CAS ID</td>
                        <td className="py-2">{molecule.cas_id}</td>
                    </tr>
                    <tr>
                        <td className="py-2 pr-4 font-semibold">Category</td>
                        <td className="py-2">
                            {molecule.category
                                .map((category) => category.name)
                                .join(", ")}
                        </td>
                    </tr>
                    <tr>
                        <td className="py-2 pr-4 font-semibold">PubChem URL</td>
                        <td className="py-2">
                            {molecule.pubchem_url ? (
                                <a
                                    href={molecule.pubchem_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline"
                                >
                                    {molecule.pubchem_url}
                                </a>
                            ) : (
                                "N/A"
                            )}
                        </td>
                    </tr>
                    <tr>
                        <td className="py-2 pr-4 font-semibold">SMILE</td>
                        <td className="py-2">{molecule.smiles}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default MoleculeBasicInfoTable;
