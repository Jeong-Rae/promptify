import { Flex } from "@radix-ui/themes";

import { InputTextArea } from "@components/editor/InputTextArea";
import { RefineButton } from "@components/editor/RefineButton";
import { OutputArea } from "@components/viewer/OutputArea";

export default function TextRefinerContainer() {
    return (
        <Flex direction="column" style={{ height: "100%" }} overflow="hidden">
            <Flex direction="column" p="6" flexGrow="1" overflow="auto">
                <InputTextArea />
                <RefineButton />
                <OutputArea />
            </Flex>
        </Flex>
    );
}
