import { Button, Text, TextField } from "@promptify/ui";
import { useRef, useEffect, useState } from "react";

import type { JSX } from "react";

type ApiKeyInputProps = {
    apiKey: string;
    onApiKeyChange: (value: string) => void;
};

export default function ApiKeyInput({ apiKey, onApiKeyChange }: ApiKeyInputProps): JSX.Element {
    const [showApiKeyInput, setShowApiKeyInput] = useState(false);
    const apiKeyInputRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (apiKeyInputRef.current && !apiKeyInputRef.current.contains(event.target as Node)) {
                setShowApiKeyInput(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div style={{ position: "relative" }} ref={apiKeyInputRef}>
            <Button
                type="button"
                color="teal"
                variant="soft"
                onClick={() => setShowApiKeyInput(!showApiKeyInput)}
            >
                <Text>🔑</Text>
            </Button>
            {showApiKeyInput && (
                <div
                    style={{
                        position: "absolute",
                        top: "100%",
                        right: 0,
                        zIndex: 10,
                        marginTop: "4px",
                        background: "white",
                        padding: "8px",
                        borderRadius: "4px",
                        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                    }}
                >
                    <TextField
                        type="password"
                        placeholder="API 키 입력"
                        value={apiKey}
                        onChange={(e) => onApiKeyChange(e.target.value)}
                        style={{ width: "220px" }}
                    />
                </div>
            )}
        </div>
    );
}
