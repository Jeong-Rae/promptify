import { Flex } from "@radix-ui/themes";

import { RuleInputForm } from "@components/prompt/RuleInputForm";

import type { ReactNode } from "react";

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
