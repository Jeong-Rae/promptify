import { Flex } from "@radix-ui/themes";

import { InputTextArea } from "@components/editor/InputTextArea";
import { RefineButton } from "@components/editor/RefineButton";
import { OutputArea } from "@components/viewer/OutputArea";

import type { ReactNode } from "react";

export default function TextRefiner(): ReactNode {
    return (
        <Flex direction="column" p="6" gap="4" style={{ height: "100%" }} overflow="auto">
            <InputTextArea />
            <RefineButton />
            <OutputArea />
        </Flex>
    );
}
