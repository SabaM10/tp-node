import { Test, TestingModule } from '@nestjs/testing';
import { ReclutierService } from './reclutier.service';

describe('ReclutierService', () => {
  let service: ReclutierService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReclutierService],
    }).compile();

    service = module.get<ReclutierService>(ReclutierService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
