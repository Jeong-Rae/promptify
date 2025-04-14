import { Flex, TextArea, Text } from "@promptify/ui";

import { INPUT_TEXTAREA_LABEL, INPUT_TEXTAREA_PLACEHOLDER } from "./constants";
import styles from "./InputTextArea.module.scss";

import type { JSX } from "react";

type InputTextAreaProps = {
    value: string;
    onChange: (value: string) => void;
};

export default function InputTextArea({ value, onChange }: InputTextAreaProps): JSX.Element {
    return (
        <Flex direction="column" gap="2" flexGrow="1" m="0">
            <Text as="label" htmlFor="input-text" size="4" weight="medium">
                {INPUT_TEXTAREA_LABEL}
            </Text>
            <TextArea
                rows={10}
                id="input-text"
                placeholder={INPUT_TEXTAREA_PLACEHOLDER}
                className={styles.InputTextArea__textarea}
                color="teal"
                variant="surface"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </Flex>
    );
}
