import { LLM_PROVIDERS, LLM_MODELS } from "@promptify/common";
import { Select } from "@promptify/ui";

import styles from "./ModelSelector.module.scss";

import type { LlmModel, LlmProvider } from "@promptify/common";
import type { JSX } from "react";

type ModelSelectorProps = {
    selectedModel: LlmModel;
    onModelChange: (model: LlmModel, provider: LlmProvider) => void;
};

export default function ModelSelector({
    selectedModel,
    onModelChange,
}: ModelSelectorProps): JSX.Element {
    const handleModelChange = (value: string) => {
        const model = value as LlmModel;
        let provider: LlmProvider = LLM_PROVIDERS.OPENAI;

        if (Object.values(LLM_MODELS.OpenAI).includes(model as any)) {
            provider = LLM_PROVIDERS.OPENAI;
        } else if (Object.values(LLM_MODELS.Anthropic).includes(model as any)) {
            provider = LLM_PROVIDERS.ANTHROPIC;
        } else if (Object.values(LLM_MODELS.Gemini).includes(model as any)) {
            provider = LLM_PROVIDERS.GEMINI;
        }

        onModelChange(model, provider);
    };

    return (
        <Select
            value={selectedModel}
            onValueChange={handleModelChange}
            className={styles.ModelSelector__select}
            width="220px"
        >
            <Select.Trigger variant="soft" />
            <Select.Group>
                <Select.Label
                    className={`${styles.ModelSelector__label} ${styles["ModelSelector__label--openai"]}`}
                >
                    OpenAI
                </Select.Label>
                {Object.values(LLM_MODELS.OpenAI).map((model) => (
                    <Select.Item key={model} value={model}>
                        {model}
                    </Select.Item>
                ))}
            </Select.Group>
            <Select.Separator />
            <Select.Group>
                <Select.Label
                    className={`${styles.ModelSelector__label} ${styles["ModelSelector__label--anthropic"]}`}
                >
                    Anthropic
                </Select.Label>
                {Object.values(LLM_MODELS.Anthropic).map((model) => (
                    <Select.Item key={model} value={model}>
                        {model}
                    </Select.Item>
                ))}
            </Select.Group>
            <Select.Separator />
            <Select.Group>
                <Select.Label
                    className={`${styles.ModelSelector__label} ${styles["ModelSelector__label--gemini"]}`}
                >
                    Gemini
                </Select.Label>
                {Object.values(LLM_MODELS.Gemini).map((model) => (
                    <Select.Item key={model} value={model}>
                        {model}
                    </Select.Item>
                ))}
            </Select.Group>
        </Select>
    );
}
