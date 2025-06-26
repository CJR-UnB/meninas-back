import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatrocinadorModule } from './patrocinador/patrocinador.module';

@Module({
  imports: [PatrocinadorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
