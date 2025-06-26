import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatrocinadorModule } from './patrocinador/patrocinador.module';
import { EscolasModule } from './escolas/escolas.module';

@Module({
  imports: [PatrocinadorModule, EscolasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
