import { Flex } from "@promptify/ui";

import PromptAddButton from "./PromptAddButton";
import { PromptListProvider } from "./PromptListContext";
import PromptListView from "./PromptListView";
import RuleNameInput from "./RuleNameInput";

import type { ReactNode } from "react";

export default function RuleInputForm(): ReactNode {
    return (
        <PromptListProvider>
            <Flex direction="column" gap="3" m="0">
                <RuleNameInput />
                <PromptListView />
                <PromptAddButton />
            </Flex>
        </PromptListProvider>
    );
}
