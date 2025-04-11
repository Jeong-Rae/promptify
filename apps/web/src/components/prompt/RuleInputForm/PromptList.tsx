import type { ReactNode } from "react";
import { Flex } from "@radix-ui/themes";

import PromptItem from "./PromptItem";

type PromptListProps = {
    prompts: string[];
};

export default function PromptList({ prompts }: PromptListProps): ReactNode {
    return (
        <Flex direction="column" gap="2" m="0">
            {prompts.map((text, idx) => (
                <PromptItem key={idx} index={idx} text={text} />
            ))}
        </Flex>
    );
}
