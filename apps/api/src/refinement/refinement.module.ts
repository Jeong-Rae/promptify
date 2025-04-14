import { Module } from '@nestjs/common';
import { RefinementService } from './refinement.service';
import { RefinementController } from './refinement.controller';
import { LlmModule } from '../llm/llm.module';
@Module({
  controllers: [RefinementController],
  providers: [RefinementService],
  imports: [LlmModule],
})
export class RefinementModule {}
