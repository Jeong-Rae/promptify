import axios from "axios";

import type { LlmModel, LlmProvider } from "@promptify/types";

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

export async function postRefinement(request: RefineRequest): Promise<RefineResponse> {
    const response = await axios.post("/refinement", request);
    return response.data;
}
