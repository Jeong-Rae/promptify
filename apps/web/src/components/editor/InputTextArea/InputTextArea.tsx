import { Flex, TextArea, Text } from "@radix-ui/themes";

import { INPUT_TEXTAREA_LABEL, INPUT_TEXTAREA_PLACEHOLDER } from "./constants";

export default function InputTextArea() {
    return (
        <Flex direction="column" flexGrow="1" mb="4">
            <Text as="label" htmlFor="input-text" size="4" weight="medium" mb="2">
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
