import { Test, TestingModule } from '@nestjs/testing';
import { LlmService } from './llm.service';
import { LLM_MODELS, LLM_PROVIDERS } from '../contant/llm.contant';
import { ChatModelFactory } from './chat-model.factory';

describe('LlmService', () => {
  let service: LlmService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LlmService, ChatModelFactory],
    }).compile();

    service = module.get<LlmService>(LlmService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAvailableLlmModels', () => {
    it('provider 가 주어지지 않으면 provider별 모델 목록 객체를 반환해야해요.', () => {
      // given
      const expectedModels = {
        OpenAI: Object.values(LLM_MODELS.OpenAI),
        Anthropic: Object.values(LLM_MODELS.Anthropic),
        Gemini: Object.values(LLM_MODELS.Gemini),
      };

      // when
      const result = service.getAvailableLlmModels();

      // then
      expect(result).toEqual(expectedModels);
    });

    it('OpenAI provider 가 주어지면 해당 provider 의 모델 목록을 반환해야해요.', () => {
      const provider = LLM_PROVIDERS.OPENAI;
      const expectedModels = Object.values(LLM_MODELS.OpenAI);

      const result = service.getAvailableLlmModels(provider);

      expect(result).toEqual(expectedModels);
    });

    it('Anthropic provider 가 주어지면 해당 provider 의 모델 목록을 반환해야해요.', () => {
      const provider = LLM_PROVIDERS.ANTHROPIC;
      const expectedModels = Object.values(LLM_MODELS.Anthropic);

      const result = service.getAvailableLlmModels(provider);

      expect(result).toEqual(expectedModels);
    });

    it('Gemini provider 가 주어지면 해당 provider 의 모델 목록을 반환해야해요.', () => {
      const provider = LLM_PROVIDERS.GEMINI;
      const expectedModels = Object.values(LLM_MODELS.Gemini);

      const result = service.getAvailableLlmModels(provider);

      expect(result).toEqual(expectedModels);
    });
  });
});
