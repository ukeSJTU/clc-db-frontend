import { MoleculeProps } from "@/types/molecule";
import Image from "next/image";

const Molecule2DViewer = ({ molecule }: { molecule: MoleculeProps }) => {
    return (
        <>
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
                        src={`${process.env.NEXT_PUBLIC_STATIC}/2Dimages/${molecule.cas_id}.sdf.png`}
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

export default Molecule2DViewer;
