import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RefinementModule } from './refinement/refinement.module';
import { LlmModule } from './llm/llm.module';

@Module({
  imports: [RefinementModule, LlmModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
