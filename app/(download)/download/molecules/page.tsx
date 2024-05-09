import React from "react";
import DownloadTableComponent from "@/components/download_table";

export default function Home() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4 ml-2">Deprecated</h1>
            <p className="text-lg mb-4 ml-2">
                This page has been deprecated and will be removed in a future
                release. If you wish to download data of a single molecule, you
                can do so by using the search page and clicking on the download
                button.
            </p>
        </div>
    );
}
