export type Prompt = string;

export type PromptList = Prompt[];

export type PromptRule = {
    id: string;
    name: string;
    prompt: Prompt;
};
