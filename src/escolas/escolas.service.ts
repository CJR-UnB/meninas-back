import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateEscolaDto } from './dto/create-escola.dto';
import { UpdateEscolaDto } from './dto/update-escola.dto';
import { EscolasRepository } from './escolas.repository';

@Injectable()
export class EscolasService {

  constructor(private readonly repository: EscolasRepository) {}

  create(createEscolaDto: CreateEscolaDto) {
    if(!createEscolaDto) throw new BadRequestException();
    return this.repository.create(createEscolaDto);
  }

  async findAll() {
    const escolas = await this.repository.findAll();
    if(!escolas) return []

    return escolas;
  }

  async findOne(id: number) {
    const escola = await this.repository.findOne(id);
    if(!escola) throw new NotFoundException();

    return escola;
  }

  async update(id: number, updateEscolaDto: UpdateEscolaDto) {
    if(!updateEscolaDto) throw new BadRequestException();
    const escola = await this.repository.findOne(id);

    if(!escola) throw new NotFoundException()
    
    return this.repository.update(id, updateEscolaDto);
  }

  async remove(id: number) {
    const escola = await this.repository.findOne(id);
    if(!escola) throw new NotFoundException()
    
    return this.repository.remove(id);
  }
}
