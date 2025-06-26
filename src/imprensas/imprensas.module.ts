import { Module } from '@nestjs/common';
import { ImprensasService } from './imprensas.service';
import { ImprensasController } from './imprensas.controller';
import { ImprensasRepository } from './imprensas.repository';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ImprensasController],
  providers: [ImprensasService, ImprensasRepository],
  imports: [PrismaModule]
})
export class ImprensasModule {}
