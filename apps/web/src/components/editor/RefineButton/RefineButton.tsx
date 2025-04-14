import { Flex, Button, Text } from "@radix-ui/themes";

import { BUTTON_LABEL_REFINE } from "./constants";

import type { JSX } from "react";

type RefineButtonProps = {
    onClick: () => void;
    isPending: boolean;
};

export default function RefineButton({ onClick, isPending }: RefineButtonProps): JSX.Element {
    return (
        <Flex justify="center" m="0">
            <Button
                size="3"
                type="submit"
                color="teal"
                variant="soft"
                onClick={onClick}
                disabled={isPending}
                loading={isPending}
            >
                <Text>{BUTTON_LABEL_REFINE}</Text>
            </Button>
        </Flex>
    );
}
