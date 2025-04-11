import type { ReactNode } from "react";
import { Flex } from "@radix-ui/themes";

import { RuleInputForm } from "@components/prompt/RuleInputForm";

export default function PromptManager(): ReactNode {
    return (
        <Flex
            direction="column"
            style={{
                height: "100%",
                overflow: "auto",
                backgroundColor: "white",
            }}
            p="6"
        >
            <RuleInputForm />
        </Flex>
    );
}
