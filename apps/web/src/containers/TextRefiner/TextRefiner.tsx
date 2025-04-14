import { Flex } from "@promptify/ui";
import { useState, type JSX } from "react";

import InputTextArea from "@components/editor/InputTextArea";
import RefineButton from "@components/editor/RefineButton";
import OutputArea from "@components/viewer/OutputArea";
import { useRefineText } from "@hooks/useRefineText";

import styles from "./TextRefiner.module.scss";

export default function TextRefiner(): JSX.Element {
    const [inputText, setInputText] = useState("");
    const [outputText, setOutputText] = useState("");
    const { mutate, isPending } = useRefineText();

    const handleSubmit = () => {
        mutate(
            {
                rules: ["오탈자 수정", "자연스러운 흐름"],
                text: inputText,
                config: {
                    provider: "openai",
                    model: "gpt-4o",
                    apiKey: "your-api-key",
                },
            },
            {
                onSuccess: (data) => {
                    setOutputText(data.refinedText);
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
                <RefineButton onClick={handleSubmit} isPending={isPending} />
                <OutputArea value={outputText} />
            </Flex>
        </form>
    );
}
