import { Injectable } from '@nestjs/common';
import { ChatModelFactory } from './chat-model.factory';
import { LLM_MODELS, LLM_PROVIDERS, LlmProvider } from '../contant/llm.contant';
import { BaseChatModel } from '@langchain/core/language_models/chat_models';
import {
  AIMessageChunk,
  HumanMessage,
  SystemMessage,
} from '@langchain/core/messages';
import { RunnableSequence } from '@langchain/core/runnables';
import { refineSystemPrompt, refineUserPrompt } from '../contant/prompt';

@Injectable()
export class LlmService {
  constructor(private readonly chatModelFactory: ChatModelFactory) {}

  async invoke(
    config: {
      provider: LlmProvider;
      model: string;
      apiKey: string;
    },
    instruction: string[],
    message: string,
  ): Promise<string> {
    const chatModel = this.chatModelFactory.create(config.provider, {
      model: config.model,
      apiKey: config.apiKey,
    });

    const pipeline = this.buildPipeline(chatModel);
    const result = await pipeline.invoke({
      rules: instruction,
      text: message,
    });

    return result;
  }

  private buildPipeline(
    chatModel: BaseChatModel,
  ): RunnableSequence<{ rules: string[]; text: string }, string> {
    const chain = RunnableSequence.from<
      { rules: string[]; text: string },
      string
    >([
      async ({ rules, text }) => {
        const system = await refineSystemPrompt.format({});
        const user = await refineUserPrompt.format({
          rules: rules.map((rule) => `<Rule>${rule}</Rule>`).join('\n'),
          text,
        });

        return [new SystemMessage(system), new HumanMessage(user)];
      },
      chatModel,
      (res: AIMessageChunk) => res.text,
    ]);

    return chain;
  }

  getAvailableLlmModels(provider?: LlmProvider) {
    switch (provider) {
      case LLM_PROVIDERS.OPENAI:
        return Object.values(LLM_MODELS.OpenAI);
      case LLM_PROVIDERS.ANTHROPIC:
        return Object.values(LLM_MODELS.Anthropic);
      case LLM_PROVIDERS.GEMINI:
        return Object.values(LLM_MODELS.Gemini);
      default:
        return Object.fromEntries(
          Object.entries(LLM_MODELS).map(([providerKey, modelsObject]) => [
            providerKey,
            Object.values(modelsObject),
          ]),
        );
    }
  }
}
