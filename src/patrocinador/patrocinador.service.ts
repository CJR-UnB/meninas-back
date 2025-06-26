import { Injectable } from '@nestjs/common';
import { CreatePatrocinadorDto } from './dto/create-patrocinador.dto';
import { UpdatePatrocinadorDto } from './dto/update-patrocinador.dto';

@Injectable()
export class PatrocinadorService {
  create(createPatrocinadorDto: CreatePatrocinadorDto) {
    return 'This action adds a new patrocinador';
  }

  findAll() {
    return `This action returns all patrocinador`;
  }

  findOne(id: number) {
    return `This action returns a #${id} patrocinador`;
  }

  update(id: number, updatePatrocinadorDto: UpdatePatrocinadorDto) {
    return `This action updates a #${id} patrocinador`;
  }

  remove(id: number) {
    return `This action removes a #${id} patrocinador`;
  }
}
