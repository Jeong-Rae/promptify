import { Module } from '@nestjs/common';
import { LlmService } from './service/llm.service';
import { ChatModelFactory } from './service/chat-model.factory';
import { LlmController } from './controller/llm.controller';

@Module({
  controllers: [LlmController],
  providers: [LlmService, ChatModelFactory],
  exports: [LlmService],
})
export class LlmModule {}
