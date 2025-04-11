import type { ReactNode } from "react";
import {
    TextArea as RadixTextArea,
    type TextAreaProps as RadixTextAreaProps,
} from "@radix-ui/themes";

export type TextAreaProps = RadixTextAreaProps;

export function TextArea({
    color = "teal",
    ...rest
}: TextAreaProps): ReactNode {
    return <RadixTextArea color={color} {...rest} />;
}
