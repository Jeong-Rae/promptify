import { Controller, Post, Body } from '@nestjs/common';
import { RefinementService } from '../service/refinement.service';
import { RefinementRequestDto } from '../dto/refinement.dto';

@Controller('refinement')
export class RefinementController {
  constructor(private readonly refinementService: RefinementService) {}

  @Post()
  async refine(@Body() refinementDto: RefinementRequestDto) {
    const { rules, text, config } = refinementDto;
    const result = await this.refinementService.refine(rules, text, config);
    return {
      refinedText: result,
    };
  }
}
