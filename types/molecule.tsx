export type simplifiedMoleculeProps = {
    name: string;
    cas_id: string;
    class_type: { name: string }[];
};

export type completeMoleculeProps = {
    name: string;
    cas_id: string;
    class_type: { name: string }[];

    url: string;
    pubchem_url: string;

    smiles: string;
    smiles_type: { smile: string }[];

    remark?: string;
};
