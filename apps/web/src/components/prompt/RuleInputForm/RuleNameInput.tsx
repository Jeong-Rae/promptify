import { Flex, Text, TextField } from "@promptify/ui";

import { useRuleFormContext } from "./RuleFormContext";

import type { ReactNode } from "react";

export default function RuleNameInput(): ReactNode {
    const { ruleName, updateRuleName } = useRuleFormContext();

    return (
        <Flex direction="column" gap="2" m="0">
            <Text as="label" htmlFor="rule-name" size="4" weight="medium">
                규칙 이름
            </Text>
            <TextField
                id="rule-name"
                placeholder="규칙 이름"
                value={ruleName}
                onChange={(e) => updateRuleName(e.target.value)}
            />
        </Flex>
    );
}
