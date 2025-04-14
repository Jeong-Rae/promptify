import { TextField } from "@promptify/ui";
import clsx from "clsx";
import { useState } from "react";

import { useRuleFormContext } from "../../../contexts/RuleFormContext";

import styles from "./RuleNameInput.module.scss";

import type { ReactNode } from "react";

export default function RuleNameInput(): ReactNode {
    const { ruleName, updateRuleName } = useRuleFormContext();
    const [isFocused, setIsFocused] = useState(false);

    return (
        <TextField
            variant="classic"
            size="3"
            placeholder="규칙이름"
            value={ruleName}
            onChange={(e) => updateRuleName(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={clsx(styles.RuleNameInput, !isFocused && styles["RuleNameInput--blurred"])}
        />
    );
}
