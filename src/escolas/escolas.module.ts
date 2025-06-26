import { Module } from '@nestjs/common';
import { EscolasService } from './escolas.service';
import { EscolasController } from './escolas.controller';

@Module({
  controllers: [EscolasController],
  providers: [EscolasService],
})
export class EscolasModule {}
