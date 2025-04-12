import { Flex } from "@promptify/ui";

import PromptAddButton from "./PromptAddButton";
import PromptListView from "./PromptListView";
import { RuleFormProvider } from "./RuleFormContext";
import RuleNameInput from "./RuleNameInput";

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
