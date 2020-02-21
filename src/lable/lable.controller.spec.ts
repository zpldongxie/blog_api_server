import { Test, TestingModule } from '@nestjs/testing';
import { LableController } from './lable.controller';

describe('Lable Controller', () => {
  let controller: LableController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LableController],
    }).compile();

    controller = module.get<LableController>(LableController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
