import type { ReactNode } from "react";
import { Flex } from "@radix-ui/themes";
import { useState } from "react";

import PromptAddButton from "./PromptAddButton";
import PromptList from "./PromptList";
import RuleNameInput from "./RuleNameInput";

export default function RuleInputForm(): ReactNode {
    const [prompts] = useState<string[]>([""]);

    return (
        <Flex direction="column" gap="3" m="0">
            <RuleNameInput />
            <PromptList prompts={prompts} />

            <PromptAddButton />
        </Flex>
    );
}
