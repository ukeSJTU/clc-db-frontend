import React from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Control, Controller } from "react-hook-form";

interface ClusteringOptionsProps {
    control: Control<any>;
    fileListLength: number;
    bits: number;
    clusterMethod: string;
}

const ClusteringOptions: React.FC<ClusteringOptionsProps> = ({
    control,
    fileListLength,
    bits,
    clusterMethod,
}) => {
    return (
        <>
            <h3>Choose the style you cluster</h3>
            <h5>Dimension Reduction Methods</h5>
            <ul>
                <li>
                    <strong>TSNE</strong>: Powerful but time consuming
                </li>
                <li>
                    <strong>PCA</strong>: Balanced between performance and time
                </li>
            </ul>
            <FormField
                control={control}
                name="reductionMethod"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Embedding Methods</FormLabel>
                        <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                        >
                            <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select an embedding method" />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                <SelectItem value="PCA">PCA</SelectItem>
                                <SelectItem value="TSNE">TSNE</SelectItem>
                            </SelectContent>
                        </Select>
                        {field.value === "TSNE" && bits > fileListLength && (
                            <FormMessage className="text-red-500">
                                Error! When using TSNE, the number of files must
                                be greater than the dimension of descriptors.
                            </FormMessage>
                        )}
                        {field.value === "TSNE" && (
                            <FormMessage>
                                Dimension of descriptors:{" "}
                                <strong>{bits}</strong>, Number of input files:{" "}
                                <strong>{fileListLength}</strong>
                            </FormMessage>
                        )}
                    </FormItem>
                )}
            />

            <h5>Cluster Methods Choice</h5>
            <ul>
                <li>
                    <strong>KNN</strong>: Good method
                </li>
                <li>
                    <strong>DBSCAN</strong>
                </li>
            </ul>
            <FormField
                control={control}
                name="clusterMethod"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Cluster Methods</FormLabel>
                        <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                        >
                            <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a cluster method" />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                <SelectItem value="KNN">KNN</SelectItem>
                                <SelectItem value="DBSCAN">DBSCAN</SelectItem>
                            </SelectContent>
                        </Select>
                    </FormItem>
                )}
            />

            {clusterMethod === "KNN" && (
                <>
                    <p>Additional parameters required by KNN:</p>
                    <FormField
                        control={control}
                        name="clusters"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Num of clusters</FormLabel>
                                <FormControl>
                                    <Input
                                        type="number"
                                        min={2}
                                        max={
                                            fileListLength === 0
                                                ? 10
                                                : fileListLength - 1
                                        }
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={control}
                        name="knnAlgro"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Algorithm</FormLabel>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select an algorithm" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="lloyd">
                                            lloyd
                                        </SelectItem>
                                        <SelectItem value="elkan">
                                            elkan
                                        </SelectItem>
                                        <SelectItem value="auto">
                                            auto
                                        </SelectItem>
                                        <SelectItem value="full">
                                            full
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormItem>
                        )}
                    />
                </>
            )}

            {clusterMethod === "DBSCAN" && (
                <>
                    <p>Additional parameters required by DBSCAN:</p>
                    <FormField
                        control={control}
                        name="eps"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>eps</FormLabel>
                                <FormControl>
                                    <Slider
                                        min={0}
                                        max={2}
                                        step={0.01}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={control}
                        name="minSamples"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>min_samples</FormLabel>
                                <FormControl>
                                    <Slider
                                        min={1}
                                        max={10}
                                        step={1}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </>
            )}
        </>
    );
};

export default ClusteringOptions;
