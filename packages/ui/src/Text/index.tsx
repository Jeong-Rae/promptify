import type { ReactNode } from "react";
import {
    Text as RadixText,
    type TextProps as RadixTextProps,
} from "@radix-ui/themes";

export type TextProps = RadixTextProps;

export function Text({ children, ...rest }: TextProps): ReactNode {
    return <RadixText {...rest}>{children}</RadixText>;
}
