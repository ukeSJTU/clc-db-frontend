import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Control, Controller } from "react-hook-form";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface DescriptorSelectorProps {
    control: Control<any>;
    name: string;
}

const DescriptorSelector: React.FC<DescriptorSelectorProps> = ({
    control,
    name,
}) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <Card>
                        <CardHeader>
                            <CardTitle>Select Descriptor</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <FormLabel>Descriptor</FormLabel>
                            <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                            >
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a descriptor" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="E3FP">E3FP</SelectItem>
                                    <SelectItem value="RDKit">RDKit</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </CardContent>
                    </Card>
                </FormItem>
            )}
        />
    );
};

export default DescriptorSelector;
