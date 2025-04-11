import { Flex } from "@radix-ui/themes";

import { PromptTextArea } from "@components/editor/PromptTextArea";
import { RefineButton } from "@components/editor/RefineButton";
import { OutputArea } from "@components/viewer/OutputArea";

export default function PromptEditorContainer() {
    return (
        <Flex direction="column" style={{ height: "100%" }} overflow="hidden">
            <Flex direction="column" p="6" flexGrow="1" overflow="auto">
                <PromptTextArea />
                <RefineButton />
                <OutputArea />
            </Flex>
        </Flex>
    );
}
