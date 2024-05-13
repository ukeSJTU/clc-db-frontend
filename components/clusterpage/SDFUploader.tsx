import React from "react";
import { Input } from "@/components/ui/input";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Control, Controller } from "react-hook-form";

interface FileUploadComponentProps {
    control: Control<any>;
    name: string;
}

const FileUploadComponent: React.FC<FileUploadComponentProps> = ({
    control,
    name,
}) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Select Files</FormLabel>
                    <FormControl>
                        <Input type="file" accept=".sdf" multiple {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

export default FileUploadComponent;
