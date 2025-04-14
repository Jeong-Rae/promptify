import { Injectable } from '@nestjs/common';
import { LlmService } from '../../llm/service/llm.service';
import { LlmProvider, LlmModel } from '../../llm/contant/llm.contant';
@Injectable()
export class RefinementService {
  constructor(private readonly llmService: LlmService) {}

  async refine(
    rules: string[],
    text: string,
    config: {
      provider: LlmProvider;
      model: LlmModel;
      apiKey: string;
    },
  ): Promise<string> {
    return this.llmService.invoke(config, rules, text);
  }
}
