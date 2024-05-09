"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import downloadFiles from "@/lib/download";
import { MoleculeProps } from "@/types/molecule";

interface DownloadButtonProps {
    molecules: MoleculeProps[];
    sdfFiles: string[]; // Array of URLs or paths to .sdf files
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
    molecules,
    sdfFiles,
}) => {
    const [downloadOption, setDownloadOption] = useState("csv");

    const handleDownload = () => {
        downloadFiles(downloadOption, molecules, sdfFiles);
    };

    return (
        <div className="flex gap-2 items-center">
            <Select
                onValueChange={(value) => setDownloadOption(value)}
                defaultValue="csv"
            >
                <SelectTrigger className="w-32">
                    <SelectValue placeholder="CSV" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="csv">CSV</SelectItem>
                    <SelectItem value="sdf">SDF</SelectItem>
                    <SelectItem value="zip">Both (ZIP)</SelectItem>
                </SelectContent>
            </Select>
            <Button onClick={handleDownload}>Download</Button>
        </div>
    );
};

export default DownloadButton;
