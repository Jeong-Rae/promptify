import { Flex, Button, Text } from "@radix-ui/themes";

import { BUTTON_LABEL_REFINE } from "./constants";

export default function RefineButton() {
    return (
        <Flex justify="center" m="0">
            <Button size="3" type="submit" color="teal" variant="soft">
                <Text>{BUTTON_LABEL_REFINE}</Text>
            </Button>
        </Flex>
    );
}
