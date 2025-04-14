import { Test, TestingModule } from '@nestjs/testing';
import { ChatModelFactory } from './chat-model.factory';
import { LLM_MODELS, LLM_PROVIDERS } from '../contant/llm.contant';
import { ChatOpenAI } from '@langchain/openai';
import { ChatAnthropic } from '@langchain/anthropic';
import { ChatGoogleGenerativeAI } from '@langchain/google-genai';

// 외부 의존성 모킹
jest.mock('@langchain/openai', () => ({
  ChatOpenAI: jest.fn().mockImplementation(() => ({
    type: 'openai',
  })),
}));

jest.mock('@langchain/anthropic', () => ({
  ChatAnthropic: jest.fn().mockImplementation(() => ({
    type: 'anthropic',
  })),
}));

jest.mock('@langchain/google-genai', () => ({
  ChatGoogleGenerativeAI: jest.fn().mockImplementation(() => ({
    type: 'gemini',
  })),
}));

describe('ChatModelFactory', () => {
  let chatModelFactory: ChatModelFactory;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChatModelFactory],
    }).compile();

    chatModelFactory = module.get<ChatModelFactory>(ChatModelFactory);

    // 테스트 사이에 모든 모킹된 함수 초기화
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(chatModelFactory).toBeDefined();
  });

  describe('create', () => {
    it('OpenAI 제공자에 대해 ChatOpenAI 인스턴스를 반환해야 합니다', () => {
      // Given
      const provider = LLM_PROVIDERS.OPENAI;
      const options = {
        model: LLM_MODELS.OpenAI.GPT4O,
        apiKey: 'test-api-key',
      };

      // When
      const result = chatModelFactory.create(provider, options);

      // Then
      expect(ChatOpenAI).toHaveBeenCalledWith({
        model: options.model,
        apiKey: options.apiKey,
      });
      expect(result).toEqual({ type: 'openai' });
    });

    it('Anthropic 제공자에 대해 ChatAnthropic 인스턴스를 반환해야 합니다', () => {
      // Given
      const provider = LLM_PROVIDERS.ANTHROPIC;
      const options = {
        model: LLM_MODELS.Anthropic.CLAUDE_3_5_SONNET,
        apiKey: 'test-api-key',
      };

      // When
      const result = chatModelFactory.create(provider, options);

      // Then
      expect(ChatAnthropic).toHaveBeenCalledWith({
        model: options.model,
        apiKey: options.apiKey,
      });
      expect(result).toEqual({ type: 'anthropic' });
    });

    it('Gemini 제공자에 대해 ChatGoogleGenerativeAI 인스턴스를 반환해야 합니다', () => {
      // Given
      const provider = LLM_PROVIDERS.GEMINI;
      const options = {
        model: LLM_MODELS.Gemini.GEMINI_2_5_PRO_PREVIEW,
        apiKey: 'test-api-key',
      };

      // When
      const result = chatModelFactory.create(provider, options);

      // Then
      expect(ChatGoogleGenerativeAI).toHaveBeenCalledWith({
        model: options.model,
        apiKey: options.apiKey,
      });
      expect(result).toEqual({ type: 'gemini' });
    });

    it('지원하지 않는 제공자에 대해 오류를 발생시켜야 합니다', () => {
      // Given
      const provider = 'unsupported-provider';
      const options = {
        model: 'some-model',
        apiKey: 'test-api-key',
      };

      // When & Then
      expect(() => chatModelFactory.create(provider, options)).toThrow(
        'Unsupported model',
      );
    });
  });
});
