import type { ReactNode } from "react";
import {
    Button as RadixButton,
    type ButtonProps as RadixButtonProps,
} from "@radix-ui/themes";

export type ButtonProps = RadixButtonProps;

export function Button({
    children,
    color = "teal",
    ...rest
}: ButtonProps): ReactNode {
    return (
        <RadixButton color={color} {...rest}>
            {children}
        </RadixButton>
    );
}
