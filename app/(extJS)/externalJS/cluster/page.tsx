"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import FileUploadComponent from "@/components/clusterpage/SDFUploader";
import DescriptorSelector from "@/components/clusterpage/DescriptorSelector";
import DescriptorParameters from "@/components/clusterpage/DescriptorParams";
import ClusteringOptions from "@/components/clusterpage/ClusteringOptions";

import api from "@/utils/api";

const FormSchema = z.object({
    selectedFiles: z.array(z.instanceof(File)),
    descriptor: z.enum(["E3FP", "RDKit"]),
    bits: z.number().min(0).default(1024),
    radius: z.number().min(0).default(1.5),
    rdkitInv: z.boolean().default(true),
    reductionMethod: z.enum(["PCA"]),
    clusterMethod: z.enum(["KNN"]),
    clusters: z.number().min(1).default(5),
    knnAlgro: z.enum(["lloyd"]),
    eps: z.number().min(0).default(0.25),
    minSamples: z.number().min(1).default(5),
});

const ClusterPage: React.FC = () => {
    const [clusteringResults, setClusteringResults] = React.useState<any>(null);

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            selectedFiles: [],
            descriptor: "E3FP",
            reductionMethod: "PCA",
            clusterMethod: "KNN",
            knnAlgro: "lloyd",
        },
    });

    const handleSubmit = async (data: z.infer<typeof FormSchema>) => {
        if (data.selectedFiles.length === 0) {
            alert("Please select at least one file.");
            return;
        }

        const formData = new FormData();
        data.selectedFiles.forEach((file) => {
            formData.append("files", file);
        });

        try {
            const uploadResponse = await api.post(
                "/cluster/upload/sdf/",
                formData
            );
            console.log("Files uploaded successfully:", uploadResponse.data);

            const savedFolder = uploadResponse.data.saved_folder;
            const requestData = {
                saved_folder: savedFolder,
                descriptor: data.descriptor,
                bits: data.bits.toString(),
                radius: data.radius.toString(),
                rdkitInv: data.rdkitInv.toString(),
                reductionMethod: data.reductionMethod,
                clusterMethod: data.clusterMethod,
                clusters: data.clusters.toString(),
                knnAlgro: data.knnAlgro,
                eps: data.eps.toString(),
                minSamples: data.minSamples.toString(),
            };

            const clusteringResponse = await api.post(
                "/cluster/process/",
                requestData
            );
            setClusteringResults(clusteringResponse.data);
            console.log("Clustering completed:", clusteringResponse.data);
        } catch (error) {
            console.error("Error clustering files:", error);
            // Handle error, e.g., show an error message
        }
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="space-y-6"
            >
                <FileUploadComponent
                    control={form.control}
                    name="selectedFiles"
                />
                <DescriptorSelector control={form.control} name="descriptor" />
                <DescriptorParameters
                    control={form.control}
                    descriptor={form.watch("descriptor")}
                />
                <ClusteringOptions
                    control={form.control}
                    fileListLength={form.watch("selectedFiles").length}
                    bits={form.watch("bits")}
                    clusterMethod={form.watch("clusterMethod")}
                />

                <Button type="submit">Submit</Button>
            </form>

            {clusteringResults && (
                <div>
                    <h2>Clustering Results</h2>
                    <p>
                        Coordinates:{" "}
                        {JSON.stringify(clusteringResults.coordinates)}
                    </p>
                    <p>
                        Class Numbers:{" "}
                        {JSON.stringify(clusteringResults.class_numbers)}
                    </p>
                    <p>IDs: {JSON.stringify(clusteringResults.ids)}</p>
                </div>
            )}
        </Form>
    );
};

export default ClusterPage;
