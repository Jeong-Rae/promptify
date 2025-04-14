import { Flex } from "@promptify/ui";

import { useRuleFormContext } from "../../../contexts/RuleFormContext";
import PromptItem from "../PromptItem";

import styles from "./PromptListView.module.scss";

import type { ReactNode } from "react";

export default function PromptListView(): ReactNode {
    const { prompts } = useRuleFormContext();

    return (
        <Flex direction="column" gap="2" m="0" className={styles.PromptListView}>
            {prompts.map((prompt, idx) => (
                <PromptItem key={idx} index={idx} prompt={prompt} />
            ))}
        </Flex>
    );
}
