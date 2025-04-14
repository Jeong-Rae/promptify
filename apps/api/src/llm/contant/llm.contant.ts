export const LLM_PROVIDERS = {
  OPENAI: 'openai',
  ANTHROPIC: 'anthropic',
  GEMINI: 'gemini',
} as const;

export type LlmProvider = (typeof LLM_PROVIDERS)[keyof typeof LLM_PROVIDERS];

export type OpenAIModel = 'gpt-4o-mini' | 'gpt-4o';
export type AnthropicModel =
  | 'claude-3-5-sonnet-20241022'
  | 'claude-3-5-haiku-20241022'
  | 'claude-3-opus-20240229'
  | 'claude-3-haiku-20240307';
export type GeminiModel =
  | 'gemini-2.5-pro-preview-03-25'
  | 'gemini-2.0-flash'
  | 'gemini-2.0-flash-lite'
  | 'gemini-1.5-flash'
  | 'gemini-1.5-pro';

export type LlmModel = OpenAIModel | AnthropicModel | GeminiModel;
