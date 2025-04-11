import { PromptManager } from "@containers/PromptManager";
import { TextRefiner } from "@containers/TextRefiner";

export default function RootPage() {
    return (
        <main>
            <PromptManager />
            <TextRefiner />
        </main>
    );
}
