"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import DownloadTableComponent from "@/components/download_table";

export default function Home() {
    const [molecules, setMolecules] = useState([]);

    useEffect(() => {
        axios
            .get("http://www.ukehome.top/api/download/molecules/all")
            .then((response) => {
                setMolecules(response.data);
            })
            .catch((error) => console.error("Fail to get", error));
    }, []);

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4 ml-2">Molecules</h1>
            <DownloadTableComponent molecules={molecules} />
        </div>
    );
}
