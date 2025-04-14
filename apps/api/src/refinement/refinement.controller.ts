import { Controller, Post, Body } from '@nestjs/common';
import { RefinementService } from './refinement.service';
import { LlmProvider } from '../llm/llm.contant';

@Controller('refinement')
export class RefinementController {
  constructor(private readonly refinementService: RefinementService) {}

  @Post()
  async refine(
    @Body()
    body: {
      rules: string[];
      text: string;
      config: {
        provider: LlmProvider;
        model: string;
        apiKey: string;
      };
    },
  ) {
    return this.refinementService.refine(body.rules, body.text, body.config);
  }
}
