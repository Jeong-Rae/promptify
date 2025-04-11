import { Flex, TextArea, Text } from "@radix-ui/themes";
import { TEXTAREA_LABEL_INPUT_ORIGINAL, TEXTAREA_PLACEHOLDER_INPUT_ORIGINAL } from "./constants";

export default function PromptTextArea() {
    return (
        <Flex direction="column" flexGrow="1" mb="4">
            <Text as="label" htmlFor="input-text" size="4" weight="medium" mb="1">
                {TEXTAREA_LABEL_INPUT_ORIGINAL}
            </Text>
            <TextArea
                id="input-text"
                placeholder={TEXTAREA_PLACEHOLDER_INPUT_ORIGINAL}
                style={{ minHeight: "128px" }}
                color="teal"
                variant="surface"
            />
        </Flex>
    );
}
