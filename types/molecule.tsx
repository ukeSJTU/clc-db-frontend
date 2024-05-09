// export type simplifiedMoleculeProps = {
//     name: string;
//     cas_id: string;
//     class_type: { name: string }[];
// };

// export type MoleculeProps = {
//     name: string;
//     cas_id: string;
//     class_type: { name: string }[];

//     url: string;
//     pubchem_url: string;

//     smiles: string;
//     smiles_type: { smile: string }[];

//     remark?: string;
// };

// export type overviewCardMoleculeProps = {
//     name: string;
//     cas_id: string;
//     class_type: { name: string }[];
//     molecule_formula: string;
//     molecular_weight: number;
// };

export type Category = {
    id: number;
    name: string;
};

export type Smile = {
    id: number;
    smile: string;
};

export type MoleculeProps = {
    name: string;
    cas_id: string;
    pubchem_cid?: string; // Optional as it can be empty
    class_type: Category[]; // Array of related categories
    url?: string; // Optional external URL field
    pubchem_url?: string; // Optional PubChem URL field
    smiles: string;
    smiles_type: Smile[]; // Array of related smiles types
    smiles_iupac?: string; // Optional IUPAC name field
    molecule_formula?: string; // Optional molecular formula
    molecular_weight?: number; // Optional molecular weight
    remark?: string; // Optional remark field
};
