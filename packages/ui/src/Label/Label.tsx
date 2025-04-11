import { Label as RadixLabel } from "@radix-ui/react-label";

export function Label({ children }: { children: React.ReactNode }) {
    return <RadixLabel>{children}</RadixLabel>;
}
