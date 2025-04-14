import { Controller } from '@nestjs/common';
import { LlmService } from '../service/llm.service';

@Controller()
export class LlmController {
  constructor(private readonly llmService: LlmService) {}
}
