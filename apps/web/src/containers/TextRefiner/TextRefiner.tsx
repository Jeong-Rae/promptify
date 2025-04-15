import { LLM_PROVIDERS, LLM_MODELS } from "@promptify/common";
import { Flex } from "@promptify/ui";
import { useState } from "react";

import InputTextArea from "@components/editor/InputTextArea";
import RefineButton from "@components/editor/RefineButton";
import { ModelSelector, ApiKeyInput } from "@components/modelSelector";
import OutputArea from "@components/viewer/OutputArea";
import { useRuleFormContext } from "@contexts/RuleFormContext";
import { useRefineText } from "@hooks/useRefineText";

import styles from "./TextRefiner.module.scss";

import type { LlmModel, LlmProvider } from "@promptify/common";
import type { JSX, FormEvent } from "react";

export default function TextRefiner(): JSX.Element {
    const [inputText, setInputText] = useState("");
    const [outputText, setOutputText] = useState("");
    const [selectedModel, setSelectedModel] = useState<LlmModel>(LLM_MODELS.OpenAI.GPT4O_MINI);
    const [provider, setProvider] = useState<LlmProvider>(LLM_PROVIDERS.OPENAI);
    const [apiKey, setApiKey] = useState("");
    const { mutate, isPending } = useRefineText();

    const { prompts } = useRuleFormContext();

    const handleModelChange = (model: LlmModel, newProvider: LlmProvider) => {
        setSelectedModel(model);
        setProvider(newProvider);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        mutate(
            {
                rules: prompts,
                text: inputText,
                config: {
                    provider: provider,
                    model: selectedModel,
                    apiKey: apiKey,
                },
            },
            {
                onSuccess: ({ refinedText }) => {
                    setOutputText(refinedText);
                },
            }
        );
    };

    return (
        <form onSubmit={handleSubmit}>
            <Flex
                direction="column"
                p="6"
                gap="4"
                className={styles.TextRefiner__container}
                overflow="auto"
            >
                <InputTextArea value={inputText} onChange={setInputText} />
                <Flex direction="row" gap="2" m="0">
                    <RefineButton isPending={isPending} />
                    <ModelSelector
                        selectedModel={selectedModel}
                        onModelChange={handleModelChange}
                    />
                    <ApiKeyInput apiKey={apiKey} onApiKeyChange={setApiKey} />
                </Flex>
                <OutputArea value={outputText} />
            </Flex>
        </form>
    );
}
