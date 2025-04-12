import { Flex } from "@promptify/ui";

import PromptAddButton from "@components/prompt/PromptAddButton";
import PromptListView from "@components/prompt/PromptListView";
import RuleNameInput from "@components/prompt/RuleNameInput";

import { RuleFormProvider } from "../RuleFormContext";

import type { ReactNode } from "react";

export default function RuleInputForm(): ReactNode {
    return (
        <RuleFormProvider>
            <Flex direction="column" gap="3" m="0">
                <RuleNameInput />
                <PromptListView />
                <PromptAddButton />
            </Flex>
        </RuleFormProvider>
    );
}
