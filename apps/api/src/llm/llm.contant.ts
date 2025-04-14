export const LLM_PROVIDERS = {
  OPENAI: 'openai',
  ANTHROPIC: 'anthropic',
  GEMINI: 'gemini',
} as const;

export type LlmProvider = (typeof LLM_PROVIDERS)[keyof typeof LLM_PROVIDERS];
