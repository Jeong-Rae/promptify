import { Injectable } from '@nestjs/common';
import { LlmService } from '../llm/llm.service';
import { LlmProvider } from '../llm/llm.contant';
@Injectable()
export class RefinementService {
  constructor(private readonly llmService: LlmService) {}

  async refine(
    rules: string[],
    text: string,
    config: {
      provider: LlmProvider;
      model: string;
      apiKey: string;
    },
  ): Promise<string> {
    return this.llmService.invoke(config, rules, text);
  }
}
