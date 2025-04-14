import PromptManager from "@containers/PromptManager";
import TextRefiner from "@containers/TextRefiner";
import { RuleFormProvider } from "@contexts/RuleFormContext";

import type { JSX } from "react";

export default function RootPage(): JSX.Element {
    return (
        <RuleFormProvider>
            <main>
                <PromptManager />
                <TextRefiner />
            </main>
        </RuleFormProvider>
    );
}
