import { LlmModel, LlmProvider } from '../../llm/contant/llm.contant';

export class RefinementRequestDto {
  rules: string[];
  text: string;
  config: {
    provider: LlmProvider;
    model: LlmModel;
    apiKey: string;
  };
}
