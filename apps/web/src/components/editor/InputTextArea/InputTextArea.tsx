import { Flex, TextArea, Text } from "@radix-ui/themes";

import { INPUT_TEXTAREA_LABEL, INPUT_TEXTAREA_PLACEHOLDER } from "./constants";

export default function InputTextArea() {
    return (
        <Flex direction="column" gap="2" flexGrow="1" m="0">
            <Text as="label" htmlFor="input-text" size="4" weight="medium">
                {INPUT_TEXTAREA_LABEL}
            </Text>
            <TextArea
                id="input-text"
                placeholder={INPUT_TEXTAREA_PLACEHOLDER}
                style={{ minHeight: "128px" }}
                color="teal"
                variant="surface"
            />
        </Flex>
    );
}
