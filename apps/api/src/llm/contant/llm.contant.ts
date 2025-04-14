export const LLM_PROVIDERS = {
  OPENAI: 'openai',
  ANTHROPIC: 'anthropic',
  GEMINI: 'gemini',
} as const;

export type LlmProvider = (typeof LLM_PROVIDERS)[keyof typeof LLM_PROVIDERS];

export const LLM_MODELS = {
  OpenAI: {
    GPT4O_MINI: 'gpt-4o-mini',
    GPT4O: 'gpt-4o',
  },
  Anthropic: {
    CLAUDE_3_5_SONNET: 'claude-3-5-sonnet-20241022',
    CLAUDE_3_5_HAIKU: 'claude-3-5-haiku-20241022',
    CLAUDE_3_OPUS: 'claude-3-opus-20240229',
    CLAUDE_3_HAIKU: 'claude-3-haiku-20240307',
  },
  Gemini: {
    GEMINI_2_5_PRO_PREVIEW: 'gemini-2.5-pro-preview-03-25',
    GEMINI_2_0_FLASH: 'gemini-2.0-flash',
    GEMINI_2_0_FLASH_LITE: 'gemini-2.0-flash-lite',
    GEMINI_1_5_FLASH: 'gemini-1.5-flash',
    GEMINI_1_5_PRO: 'gemini-1.5-pro',
  },
} as const;

export type OpenAIModel =
  (typeof LLM_MODELS.OpenAI)[keyof typeof LLM_MODELS.OpenAI];
export type AnthropicModel =
  (typeof LLM_MODELS.Anthropic)[keyof typeof LLM_MODELS.Anthropic];
export type GeminiModel =
  (typeof LLM_MODELS.Gemini)[keyof typeof LLM_MODELS.Gemini];

export type LlmModel = OpenAIModel | AnthropicModel | GeminiModel;
