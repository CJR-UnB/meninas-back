import { Module } from '@nestjs/common';
import { PatrocinadorService } from './patrocinador.service';
import { PatrocinadorController } from './patrocinador.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PatrocinadorRepository } from './patrocinador.repository';

@Module({
  controllers: [PatrocinadorController],
  providers: [PatrocinadorService, PatrocinadorRepository],
  imports: [PrismaModule]
})
export class PatrocinadorModule {}
