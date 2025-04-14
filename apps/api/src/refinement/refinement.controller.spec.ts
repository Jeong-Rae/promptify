import { Test, TestingModule } from '@nestjs/testing';
import { RefinementController } from './refinement.controller';
import { RefinementService } from './refinement.service';

describe('RefinementController', () => {
  let controller: RefinementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RefinementController],
      providers: [RefinementService],
    }).compile();

    controller = module.get<RefinementController>(RefinementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
