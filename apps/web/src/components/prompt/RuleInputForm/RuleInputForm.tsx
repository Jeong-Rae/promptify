import { Flex } from "@promptify/ui";
import { useState } from "react";

import PromptAddButton from "./PromptAddButton";
import { default as PromptList } from "./PromptList";
import RuleNameInput from "./RuleNameInput";

import type { ReactNode } from "react";

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
