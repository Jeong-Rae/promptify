import { Flex, TextArea, Text } from "@radix-ui/themes";

import { TEXT_LABEL_OUTPUT, TEXT_PLACEHOLDER_OUTPUT } from "./constants";

export default function OutputArea() {
    return (
        <Flex direction="column" flexGrow="1" mt="4">
            <Text as="label" htmlFor="output-text" size="4" weight="medium" mb="2">
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
