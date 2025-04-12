import { Button } from "@promptify/ui";

import { useRuleFormContext } from "../RuleFormContext";

import type { ReactNode } from "react";

export default function PromptResetButton(): ReactNode {
    const { resetForm, restoreForm, hasBackup } = useRuleFormContext();

    if (hasBackup) {
        return (
            <Button type="button" size="3" variant="soft" color="blue" onClick={restoreForm}>
                되돌리기
            </Button>
        );
    }

    return (
        <Button type="button" size="3" variant="soft" color="red" onClick={resetForm}>
            초기화
        </Button>
    );
}
