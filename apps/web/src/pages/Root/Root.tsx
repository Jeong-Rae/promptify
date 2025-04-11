import { PromptManager } from "@containers/PromptManager";
import { TextRefiner } from "@containers/TextRefiner";

import type { ReactNode } from "react";

export default function RootPage(): ReactNode {
    return (
        <main>
            <PromptManager />
            <TextRefiner />
        </main>
    );
}
