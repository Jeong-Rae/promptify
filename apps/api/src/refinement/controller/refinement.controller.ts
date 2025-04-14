import { Controller, Post, Body } from '@nestjs/common';
import { RefinementService } from '../service/refinement.service';
import { RefinementRequestDto } from '../dto/refinement.dto';

@Controller('refinement')
export class RefinementController {
  constructor(private readonly refinementService: RefinementService) {}

  @Post()
  async refine(@Body() refinementDto: RefinementRequestDto) {
    return this.refinementService.refine(
      refinementDto.rules,
      refinementDto.text,
      refinementDto.config,
    );
  }
}
