import { ChatOpenAI } from '@langchain/openai';
import { Injectable } from '@nestjs/common';
import { LLM_PROVIDERS, LlmProvider } from '../contant/llm.contant';
import { ChatAnthropic } from '@langchain/anthropic';
import { ChatGoogleGenerativeAI } from '@langchain/google-genai';
import { BaseChatModel } from '@langchain/core/language_models/chat_models';

@Injectable()
export class ChatModelFactory {
  create(
    provider: LlmProvider,
    options: {
      model: string;
      apiKey: string;
    },
  ): BaseChatModel {
    const { model, apiKey } = options;

    switch (provider) {
      case LLM_PROVIDERS.OPENAI:
        return new ChatOpenAI({ model, apiKey });
      case LLM_PROVIDERS.ANTHROPIC:
        return new ChatAnthropic({ model, apiKey });
      case LLM_PROVIDERS.GEMINI:
        return new ChatGoogleGenerativeAI({ model, apiKey });
      default:
        throw new Error(`Unsupported model: ${model}`);
    }
  }
}
