import { Button } from "@promptify/ui";

import { usePromptListContext } from "./PromptListContext";

import type { ReactNode } from "react";

export default function PromptAddButton(): ReactNode {
    const { addPrompt } = usePromptListContext();

    return (
        <Button type="button" size="3" variant="soft" onClick={addPrompt}>
            + 프롬프트 추가
        </Button>
    );
}
