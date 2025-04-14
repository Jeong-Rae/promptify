import { Test, TestingModule } from '@nestjs/testing';
import { LlmController } from './llm.controller';
import { LlmService } from '../service/llm.service';
import { LLM_MODELS, LLM_PROVIDERS } from '../contant/llm.contant';

describe('LlmController', () => {
  let controller: LlmController;

  const mockLlmService = {
    getAvailableLlmModels: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LlmController],
      providers: [
        {
          provide: LlmService,
          useValue: mockLlmService,
        },
      ],
    }).compile();

    controller = module.get<LlmController>(LlmController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getActiveLlmModels', () => {
    it('provider 쿼리 파라미터가 없으면 모든 provider의 모델 목록 객체를 반환해야 합니다.', () => {
      // given
      const expectedResult = {
        OpenAI: Object.values(LLM_MODELS.OpenAI),
        Anthropic: Object.values(LLM_MODELS.Anthropic),
        Gemini: Object.values(LLM_MODELS.Gemini),
      };
      mockLlmService.getAvailableLlmModels.mockReturnValue(expectedResult);

      // when
      const result = controller.getActiveLlmModels();

      // then
      expect(mockLlmService.getAvailableLlmModels).toHaveBeenCalledWith(
        undefined,
      );
      expect(result).toEqual(expectedResult);
    });

    it('provider 쿼리 파라미터가 주어지면 해당 provider의 모델 목록 배열을 반환해야 합니다.', () => {
      // given
      const provider = LLM_PROVIDERS.OPENAI;
      const expectedResult = Object.values(LLM_MODELS.OpenAI);
      mockLlmService.getAvailableLlmModels.mockReturnValue(expectedResult);

      // when
      const result = controller.getActiveLlmModels(provider);

      // then
      expect(mockLlmService.getAvailableLlmModels).toHaveBeenCalledWith(
        provider,
      );
      expect(result).toEqual(expectedResult);
    });
  });
});
