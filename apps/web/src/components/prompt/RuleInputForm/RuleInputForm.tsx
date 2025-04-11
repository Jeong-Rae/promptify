import { Flex, Heading } from "@radix-ui/themes";
import { useState } from "react";

import PromptAddButton from "./PromptAddButton";
import PromptList from "./PromptList";
import RuleNameInput from "./RuleNameInput";

export default function RuleInputForm(): React.ReactNode {
    const [prompts] = useState<string[]>([""]);

    return (
        <Flex direction="column" p="6">
            <Heading size="4" mb="3">
                새 변환 프롬프트 생성
            </Heading>

            <RuleNameInput />
            <PromptList prompts={prompts} />

            <PromptAddButton />
        </Flex>
    );
}
