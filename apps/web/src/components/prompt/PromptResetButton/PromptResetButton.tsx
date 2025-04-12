import { Button } from "@promptify/ui";

import { useRuleFormContext } from "../RuleFormContext";

import type { ReactNode } from "react";

export default function PromptResetButton(): ReactNode {
    const { resetForm } = useRuleFormContext();

    return (
        <Button type="button" size="3" variant="soft" color="red" onClick={resetForm}>
            초기화
        </Button>
    );
}
