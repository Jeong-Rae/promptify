import { Flex, TextArea, Text } from "@radix-ui/themes";

import { TEXT_LABEL_OUTPUT, TEXT_PLACEHOLDER_OUTPUT } from "./constants";

import type { ReactNode } from "react";

export default function OutputArea(): ReactNode {
    return (
        <Flex direction="column" gap="2" flexGrow="1" m="0">
            <Text as="label" htmlFor="output-text" size="4" weight="medium">
                {TEXT_LABEL_OUTPUT}
            </Text>
            <TextArea
                id="output-text"
                placeholder={TEXT_PLACEHOLDER_OUTPUT}
                style={{ minHeight: "128px" }}
                color="teal"
                variant="surface"
                readOnly
            />
        </Flex>
    );
}
