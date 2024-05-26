const HelpPage = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">Help</h1>

            <h2 className="text-2xl font-bold mb-4">Home Page:</h2>
            <p className="mb-4">
                Use the <strong className="font-bold">navigation bar</strong> to
                get quick access to the database.
            </p>
            <div className="bg-gray-200 h-48 mb-8 flex items-center justify-center text-gray-500">
                Placeholder Image
            </div>

            <h2 className="text-2xl font-bold mb-4">Overview:</h2>
            <p className="mb-4">
                Retrieve the information in the format of cards or tables.
                Suitable for casual{" "}
                <strong className="font-bold">browsing</strong>. You can click
                to download or review details of the certain molecule you are
                interested in.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gray-200 h-48 flex items-center justify-center text-gray-500">
                    Placeholder Image
                </div>
                <div className="bg-gray-200 h-48 flex items-center justify-center text-gray-500">
                    Placeholder Image
                </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Download:</h2>
            <p className="mb-4">
                Suitable for{" "}
                <strong className="font-bold">batch downloading</strong>. It
                &apos;s similar to the overview page but you can choose to
                download multiple molecules of{" "}
                <strong className="font-bold">one category</strong>, in a page
                or all of them.
            </p>
            <div className="bg-gray-200 h-48 mb-8 flex items-center justify-center text-gray-500">
                Placeholder Image
            </div>
            <p className="mb-4">
                What you will get here is a folder of SDFs and a combined Excel
                of basic information. Notice that if downloaded separately, XLSX
                files will be individual and require manual merging of rows.
                This is the <strong className="font-bold">only method</strong>{" "}
                to obtain a <strong className="font-bold">combined</strong> one.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gray-200 h-48 flex items-center justify-center text-gray-500">
                    Placeholder Image
                </div>
                <div className="bg-gray-200 h-48 flex items-center justify-center text-gray-500">
                    Placeholder Image
                </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Search:</h2>
            <p className="mb-4">
                You can search for CAS ID, Name, or SMILE. Notice that you can
                perform{" "}
                <strong className="font-bold">a partial keyword search</strong>,
                and the system will automatically match all relevant results:
            </p>
            <div className="bg-gray-200 h-48 mb-8 flex items-center justify-center text-gray-500">
                Placeholder Image
            </div>
            <p className="mb-4">
                You can <strong className="font-bold">draw</strong> a structure
                and it will be converted into SMILES for searching. Note that
                partial search also applies.
            </p>
            <div className="bg-gray-200 h-48 mb-8 flex items-center justify-center text-gray-500">
                Placeholder Image
            </div>
            <p className="mb-4">
                Also, we support{" "}
                <strong className="font-bold">multi-search</strong> by uploading
                a CSV of IDs:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gray-200 h-48 flex items-center justify-center text-gray-500">
                    Placeholder Image
                </div>
                <div className="bg-gray-200 h-48 flex items-center justify-center text-gray-500">
                    Placeholder Image
                </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Clustering:</h2>
            <p className="mb-4">
                <strong className="font-bold">Clustering</strong> is the{" "}
                <strong className="font-bold">core</strong> function of this
                database. Thanks to the high-quality 3D coordinate information
                computed, you can download SDF files and perform dimensionality
                reduction and clustering to guide your experiments.
            </p>
            <p className="mb-4">
                Let &apos;s assume you are conducting a ligand screening
                experiment, and you have completed a portion of it, obtaining
                the yield for each ligand. Now, as you proceed with your
                experiment and explore more ligands, our database is here to
                assist you:
            </p>
            <p className="mb-4">
                Firstly, you need to{" "}
                <strong className="font-bold">download</strong> all relevant SDF
                files from the database, including those you have completed and
                those you are yet to explore, and then{" "}
                <strong className="font-bold">upload</strong> them to our online
                clustering tool.
            </p>
            <div className="bg-gray-200 h-48 mb-8 flex items-center justify-center text-gray-500">
                Placeholder Image
            </div>
            <p className="mb-4">
                Secondly, you need to select{" "}
                <strong className="font-bold">descriptors</strong> for
                clustering, as well as the{" "}
                <strong className="font-bold">
                    dimensionality reduction method
                </strong>
                , <strong className="font-bold">clustering algorithm</strong>,
                and their corresponding{" "}
                <strong className="font-bold">parameters</strong>. We provide a
                visual adjustment bar for your convenience, so please experiment
                multiple times until you achieve satisfactory results.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gray-200 h-48 flex items-center justify-center text-gray-500">
                    Placeholder Image
                </div>
                <div className="bg-gray-200 h-48 flex items-center justify-center text-gray-500">
                    Placeholder Image
                </div>
            </div>
            <p className="mb-4">
                Lastly, based on the clustering outcomes,{" "}
                <strong className="font-bold">select</strong> the ligands you
                will explore next. In general, you should prioritize ligands
                that are{" "}
                <strong className="font-bold">
                    close to those with high yields
                </strong>{" "}
                and{" "}
                <strong className="font-bold">
                    different from those with low yields
                </strong>
                . This prioritization is likely to assist you in identifying the
                optimal ligands quickly.
            </p>
            <div className="bg-gray-200 h-48 mb-8 flex items-center justify-center text-gray-500">
                Placeholder Image
            </div>

            <h2 className="text-2xl font-bold mb-4">Stats:</h2>
            <p className="mb-4">
                Obtain various <strong className="font-bold">graphics</strong>,
                such as molecular weight distribution and ligand type
                distribution.
            </p>

            <h2 className="text-2xl font-bold mb-4">Help:</h2>
            <p className="mb-4">
                Click here and you will jump to this page for help.
            </p>

            <h2 className="text-2xl font-bold mb-4">Contact:</h2>
            <p>
                If you have any questions, don &apos;t hesitate to contact us.
            </p>
        </div>
    );
};

export default HelpPage;
