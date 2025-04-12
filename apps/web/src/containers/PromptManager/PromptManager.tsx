import { Flex } from "@promptify/ui";

import RuleInputForm from "@components/prompt/RuleInputForm";

import styles from "./PromptManager.module.scss";

import type { ReactNode } from "react";

export default function PromptManager(): ReactNode {
    return (
        <Flex direction="column" className={styles.PromptManager__container} p="6">
            <RuleInputForm />
        </Flex>
    );
}
