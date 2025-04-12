import type { ReactNode, ComponentProps } from "react";
import { TextField as RadixTextField } from "@radix-ui/themes";

export type TextFieldProps = ComponentProps<typeof RadixTextField.Root>;
export type TextFieldSlotProps = ComponentProps<typeof RadixTextField.Slot>;

export function TextField({
    color = "teal",
    ...rest
}: TextFieldProps): ReactNode {
    return <RadixTextField.Root color={color} {...rest} />;
}

TextField.Slot = RadixTextField.Slot;
