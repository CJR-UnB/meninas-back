import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePatrocinadorDto } from './dto/create-patrocinador.dto';
import { UpdatePatrocinadorDto } from './dto/update-patrocinador.dto';
import { PatrocinadorRepository } from './patrocinador.repository';

@Injectable()
export class PatrocinadorService {
  constructor(private readonly repository: PatrocinadorRepository) {}

  async create(createPatrocinadorDto: CreatePatrocinadorDto) {
    if(!createPatrocinadorDto) throw new BadRequestException();
    return this.repository.create(createPatrocinadorDto);
  }

  async findAll() {
    const patrocinador = await this.repository.findAll();
    if(!patrocinador) throw new NotFoundException;

    return patrocinador;
  }

  async findOne(id: number) {
    const patrocinador = await this.repository.findOne(id);
    if(!patrocinador) throw new NotFoundException();

    return patrocinador;
  }

  async update(id: number, updatePatrocinadorDto: UpdatePatrocinadorDto) {
    if(!updatePatrocinadorDto) throw new BadRequestException();
    const patrocinador = await this.repository.findOne(id)
    if(!patrocinador) throw new NotFoundException();
  
    return this.repository.update(id, updatePatrocinadorDto);
  }

  async remove(id: number) {

    const patrocinador = await this.repository.findOne(id);
    if(!patrocinador) throw new NotFoundException()
    
    return patrocinador;
  }
}
