import { Flex } from "@radix-ui/themes";

import PromptItem from "./PromptItem";

type PromptListProps = {
    prompts: string[];
};

export default function PromptList({ prompts }: PromptListProps): React.ReactNode {
    return (
        <Flex direction="column" gap="2" mb="2">
            {prompts.map((text, idx) => (
                <PromptItem key={idx} index={idx} text={text} />
            ))}
        </Flex>
    );
}
