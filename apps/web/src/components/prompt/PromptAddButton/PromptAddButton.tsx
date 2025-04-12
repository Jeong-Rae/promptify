import { Button } from "@promptify/ui";

import { useRuleFormContext } from "../RuleInputForm/RuleFormContext";

import type { ReactNode } from "react";

export default function PromptAddButton(): ReactNode {
    const { addPrompt } = useRuleFormContext();

    return (
        <Button type="button" size="3" variant="soft" onClick={addPrompt}>
            + 프롬프트 추가
        </Button>
    );
}
