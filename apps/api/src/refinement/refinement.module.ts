import { Module } from '@nestjs/common';
import { RefinementService } from './service/refinement.service';
import { RefinementController } from './controller/refinement.controller';
import { LlmModule } from '../llm/llm.module';
@Module({
  controllers: [RefinementController],
  providers: [RefinementService],
  imports: [LlmModule],
})
export class RefinementModule {}
