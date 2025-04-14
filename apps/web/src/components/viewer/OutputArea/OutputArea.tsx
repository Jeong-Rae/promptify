import { Flex, TextArea, Text } from "@promptify/ui";

import { TEXT_LABEL_OUTPUT, TEXT_PLACEHOLDER_OUTPUT } from "./constants";
import styles from "./OutputArea.module.scss";

import type { JSX } from "react";

type OutputAreaProps = {
    value: string;
};

export default function OutputArea({ value }: OutputAreaProps): JSX.Element {
    return (
        <Flex direction="column" gap="2" flexGrow="1" m="0">
            <Text as="label" htmlFor="output-text" size="4" weight="medium">
                {TEXT_LABEL_OUTPUT}
            </Text>
            <TextArea
                rows={10}
                id="output-text"
                placeholder={TEXT_PLACEHOLDER_OUTPUT}
                className={styles.OutputArea__textarea}
                color="teal"
                variant="surface"
                readOnly
                value={value}
            />
        </Flex>
    );
}
