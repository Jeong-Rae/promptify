import type { ReactNode } from "react";
import {
    Flex as RadixFlex,
    FlexProps as RadixFlexProps,
} from "@radix-ui/themes";

export type FlexProps = RadixFlexProps;

export function Flex({ children, ...rest }: FlexProps): ReactNode {
    return <RadixFlex {...rest}>{children}</RadixFlex>;
}
