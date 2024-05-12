import { MoleculeProps } from "@/types/molecule";

const MoleculeSmileTypes = ({ molecule }: { molecule: MoleculeProps }) => {
    return (
        <>
            <h3 className="text-xl font-semibold">SMILE Type</h3>
            <p>
                {(molecule.smiles_type || [])
                    .map((st) => st.smile)
                    .join(", ") || "N/A"}
            </p>
        </>
    );
};

export default MoleculeSmileTypes;
