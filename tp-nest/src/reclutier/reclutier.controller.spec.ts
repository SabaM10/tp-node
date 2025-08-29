import { Test, TestingModule } from '@nestjs/testing';
import { ReclutierController } from './reclutier.controller';

describe('ReclutierController', () => {
  let controller: ReclutierController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReclutierController],
    }).compile();

    controller = module.get<ReclutierController>(ReclutierController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
