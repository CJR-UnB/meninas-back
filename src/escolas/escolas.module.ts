import { Module } from '@nestjs/common';
import { EscolasService } from './escolas.service';
import { EscolasController } from './escolas.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { EscolasRepository } from './escolas.repository';

@Module({
  controllers: [EscolasController],
  providers: [EscolasService, EscolasRepository],
  imports: [PrismaModule]
})
export class EscolasModule {}
