import { Module } from '@nestjs/common';
import { LlmService } from './llm.service';
import { LlmController } from './llm.controller';
import { ChatModelFactory } from './chat-model.factory';

@Module({
  controllers: [LlmController],
  providers: [LlmService, ChatModelFactory],
  exports: [LlmService],
})
export class LlmModule {}
