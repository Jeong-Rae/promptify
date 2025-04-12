import { Flex } from "@promptify/ui";

import { InputTextArea } from "@components/editor/InputTextArea";
import { RefineButton } from "@components/editor/RefineButton";
import { OutputArea } from "@components/viewer/OutputArea";

import styles from "./TextRefiner.module.scss";

import type { ReactNode } from "react";

export default function TextRefiner(): ReactNode {
    return (
        <Flex
            direction="column"
            p="6"
            gap="4"
            className={styles.TextRefiner__container}
            overflow="auto"
        >
            <InputTextArea />
            <RefineButton />
            <OutputArea />
        </Flex>
    );
}
