import { LlmModel, LlmProvider } from "@promptify/common";

export type RefineRequest = {
    rules: string[];
    text: string;
    config: {
        provider: LlmProvider;
        model: LlmModel;
        apiKey: string;
    };
};

export type RefineResponse = {
    refinedText: string;
};
