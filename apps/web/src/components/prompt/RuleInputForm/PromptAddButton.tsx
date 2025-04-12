import { Button } from "@promptify/ui";

import type { ReactNode } from "react";

export default function PromptAddButton(): ReactNode {
    return (
        <Button type="button" size="3" variant="soft">
            + 프롬프트 추가
        </Button>
    );
}
