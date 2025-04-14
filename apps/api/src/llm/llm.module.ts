import { Module } from '@nestjs/common';
import { LlmService } from './service/llm.service';
import { LlmController } from './controller/llm.controller';
import { ChatModelFactory } from './service/chat-model.factory';

@Module({
  controllers: [LlmController],
  providers: [LlmService, ChatModelFactory],
  exports: [LlmService],
})
export class LlmModule {}
