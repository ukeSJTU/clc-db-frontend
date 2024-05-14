import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Control, Controller } from "react-hook-form";
import UploadedFile from "@/components/clusterpage/UploadedFile";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface FileUploadComponentProps {
    control: Control<any>;
    name: string;
    onFileChange: (files: File[]) => void;
}

const FileUploadComponent: React.FC<FileUploadComponentProps> = ({
    control,
    name,
    onFileChange,
}) => {
    const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const newFiles = Array.from(event.target.files);
            const updatedFiles = [...uploadedFiles, ...newFiles];
            setUploadedFiles(updatedFiles);
            onFileChange(updatedFiles);
        }
    };

    const handleFileDelete = (index: number) => {
        const updatedFiles = uploadedFiles.filter((_, i) => i !== index);
        setUploadedFiles(updatedFiles);
        onFileChange(updatedFiles);
    };

    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <Card>
                        <CardHeader>
                            <CardTitle>Step 1. Select Files</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <FormControl>
                                <Input
                                    type="file"
                                    accept=".sdf"
                                    multiple
                                    onChange={handleFileChange}
                                    className="w-full"
                                />
                            </FormControl>
                            <FormMessage />
                            {uploadedFiles.length > 0 && (
                                <div className="mt-4">
                                    <p className="text-sm text-gray-500">
                                        Uploaded Files: {uploadedFiles.length}
                                    </p>
                                    <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                        {uploadedFiles.map((file, index) => (
                                            <UploadedFile
                                                key={index}
                                                file={file}
                                                onDelete={() =>
                                                    handleFileDelete(index)
                                                }
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </FormItem>
            )}
        />
    );
};

export default FileUploadComponent;
