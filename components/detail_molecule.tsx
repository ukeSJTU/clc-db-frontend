import { completeMoleculeProps } from "@/types/molecule";
import Link from "next/link";

const MoleculeDetailSheet = (molecule: completeMoleculeProps) => {
    // console.log(molecule);
    return (
        <div className="w-3/4 space-y-4 overflow-auto h-screen">
            <section id="basic-info">
                <h2 className="text-2xl font-semibold">Basic Info</h2>
                <p>CAS ID: {molecule.cas_id}</p>
                <p className="text-gray-600">
                    Class Type:{" "}
                    {molecule.class_type.map((type, index) => (
                        <span key={index}>
                            {type.name}
                            {index < molecule.class_type.length - 1 ? ", " : ""}
                        </span>
                    ))}
                </p>
            </section>
            <section id="external-urls">
                <h2 className="text-2xl font-semibold">External URLs:</h2>
                <p>
                    <Link href={molecule.url} target="_blank">
                        Molecule URL: {molecule.url}
                    </Link>
                </p>
                <p>
                    <Link href={molecule.pubchem_url} target="_blank">
                        PubChem URL: {molecule.pubchem_url}
                    </Link>
                </p>
            </section>
            <section id="smiles">
                <h2 className="text-2xl font-semibold">SMILES</h2>
                <p>SMILES: {molecule.smiles}</p>
                <p>
                    SMILES Type:{" "}
                    {molecule.smiles_type.map((st) => st.smile).join(", ")}
                </p>
            </section>
            <section id="remark">
                <h2 className="text-2xl font-semibold">Remark</h2>
                <p>{molecule.remark || "No remarks"}</p>
            </section>
        </div>
    );
};

export default MoleculeDetailSheet;
