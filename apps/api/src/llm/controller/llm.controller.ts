import { Controller, Get, Query } from '@nestjs/common';
import { LlmService } from '../service/llm.service';
import { LlmProvider } from '../contant/llm.contant';

@Controller('llm')
export class LlmController {
  constructor(private readonly llmService: LlmService) {}

  @Get('/models')
  getActiveLlmModels(@Query('provider') provider?: string) {
    return this.llmService.getAvailableLlmModels(provider as LlmProvider);
  }
}
