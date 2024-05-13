import React from "react";
import { Input } from "@/components/ui/input";
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Control, Controller } from "react-hook-form";

interface E3FPParametersProps {
    control: Control<any>;
}

interface RDKitParametersProps {
    control: Control<any>;
}

interface DescriptorParametersProps {
    control: Control<any>;
    descriptor: string;
}

const E3FPParameters: React.FC<E3FPParametersProps> = ({ control }) => {
    return (
        <div className="flex flex-row">
            <FormField
                control={control}
                name="bits"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>nBits of RDKit</FormLabel>
                        <FormControl>
                            <Input
                                type="number"
                                // min={0}
                                step={24}
                                value={field.value}
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                ) => field.onChange(Number(e.target.value))}
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={control}
                name="radius"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Radius multiplier</FormLabel>
                        <FormControl>
                            <Slider min={0} max={10} step={0.1} {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={control}
                name="rdkitInv"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Feature</FormLabel>
                        <FormControl>
                            <RadioGroup
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                ) => field.onChange(Boolean(e.target.value))}
                                defaultValue={field.value}
                            >
                                <RadioGroupItem value="Yes">Yes</RadioGroupItem>
                                <RadioGroupItem value="No">No</RadioGroupItem>
                            </RadioGroup>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>
    );
};

const RDKitParameters: React.FC<RDKitParametersProps> = ({ control }) => {
    return (
        <div className="flex flex-row">
            <FormField
                control={control}
                name="bits"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>nBits of RDKit</FormLabel>
                        <FormControl>
                            <Input
                                type="number"
                                // min={0}
                                step={24}
                                value={field.value}
                                onChange={(e) =>
                                    field.onChange(Number(e.target.value))
                                }
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={control}
                name="rdkitRadius"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Radius</FormLabel>
                        <FormControl>
                            <Slider min={0} max={10} step={1} {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={control}
                name="rdkitUseFeatures"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>useFeatures</FormLabel>
                        <FormControl>
                            <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value ? "Yes" : "No"}
                            >
                                <RadioGroupItem value="Yes">Yes</RadioGroupItem>
                                <RadioGroupItem value="No">No</RadioGroupItem>
                            </RadioGroup>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={control}
                name="rdkitUseBondTypes"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>useBondTypes</FormLabel>
                        <FormControl>
                            <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value ? "Yes" : "No"}
                            >
                                <RadioGroupItem value="Yes">Yes</RadioGroupItem>
                                <RadioGroupItem value="No">No</RadioGroupItem>
                            </RadioGroup>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={control}
                name="rdkitUseChirality"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>useChirality</FormLabel>
                        <FormControl>
                            <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value ? "Yes" : "No"}
                            >
                                <RadioGroupItem value="Yes">Yes</RadioGroupItem>
                                <RadioGroupItem value="No">No</RadioGroupItem>
                            </RadioGroup>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>
    );
};

const DescriptorParameters: React.FC<DescriptorParametersProps> = ({
    control,
    descriptor,
}) => {
    if (descriptor === "E3FP") {
        return <E3FPParameters control={control} />;
    } else if (descriptor === "RDKit") {
        return <RDKitParameters control={control} />;
    }

    return (
        <div>
            <p>Parameter setting for descriptor {descriptor} does not exist</p>
        </div>
    );
};

export default DescriptorParameters;
