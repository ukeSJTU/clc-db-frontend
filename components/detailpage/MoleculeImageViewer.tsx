import { MoleculeProps } from "@/types/molecule";
import Image from "next/image";

const MoleculeImageViewer = ({ molecule }: { molecule: MoleculeProps }) => {
    return (
        <>
            <h3 className="text-xl font-semibold">Image</h3>
            {molecule.pubchem_cid ? (
                <div
                    style={{
                        width: "230px",
                        height: "250px",
                        position: "relative",
                    }}
                >
                    <Image
                        alt="2D Image"
                        src={`https://pubchem.ncbi.nlm.nih.gov/image/imagefly.cgi?cid=${molecule.pubchem_cid}&width=500&height=500`}
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
            ) : (
                <p>No image available</p>
            )}
        </>
    );
};

export default MoleculeImageViewer;
