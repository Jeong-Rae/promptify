import type { ReactNode } from "react";
import { TextArea } from "@radix-ui/themes";

type PromptItemProps = {
    index: number;
    text: string;
};

export default function PromptItem({ index, text }: PromptItemProps): ReactNode {
    return (
        <TextArea
            placeholder={`프롬프트 #${index + 1}`}
            value={text}
            color="teal"
            variant="surface"
            style={{ minHeight: "60px" }}
        />
    );
}
