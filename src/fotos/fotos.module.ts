import { Module } from '@nestjs/common';
import { FotosService } from './fotos.service';
import { FotosController } from './fotos.controller';
import { FotosRepository } from './fotos.repository';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [FotosController],
  providers: [FotosService, FotosRepository],
  imports: [PrismaModule]
})
export class FotosModule {}
