import type { ReactNode } from "react";
import { PromptManager } from "@containers/PromptManager";
import { TextRefiner } from "@containers/TextRefiner";

export default function RootPage(): ReactNode {
    return (
        <main>
            <PromptManager />
            <TextRefiner />
        </main>
    );
}
