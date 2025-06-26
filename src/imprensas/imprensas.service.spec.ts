import { Test, TestingModule } from '@nestjs/testing';
import { ImprensasService } from './imprensas.service';

describe('ImprensasService', () => {
  let service: ImprensasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImprensasService],
    }).compile();

    service = module.get<ImprensasService>(ImprensasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
