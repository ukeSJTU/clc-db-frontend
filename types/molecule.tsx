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

export type overviewCardMoleculeProps = {
    name: string;
    cas_id: string;
    class_type: { name: string }[];
    molecule_formula: string;
    molecular_weight: number;
};
