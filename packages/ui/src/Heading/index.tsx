import type { ReactNode } from "react";
import {
    Heading as RadixHeading,
    type HeadingProps as RadixHeadingProps,
} from "@radix-ui/themes";

export type HeadingProps = RadixHeadingProps;

export function Heading({
    children,
    size = "4",
    ...rest
}: HeadingProps): ReactNode {
    return (
        <RadixHeading size={size} {...rest}>
            {children}
        </RadixHeading>
    );
}
