import { Test, TestingModule } from '@nestjs/testing';
import { ImprensasController } from './imprensas.controller';
import { ImprensasService } from './imprensas.service';

describe('ImprensasController', () => {
  let controller: ImprensasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImprensasController],
      providers: [ImprensasService],
    }).compile();

    controller = module.get<ImprensasController>(ImprensasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
