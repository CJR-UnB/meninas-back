import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateImprensaDto } from './dto/create-imprensa.dto';
import { UpdateImprensaDto } from './dto/update-imprensa.dto';
import { ImprensasRepository } from './imprensas.repository';

@Injectable()
export class ImprensasService {

  constructor(private readonly repository: ImprensasRepository) {}

  create(createImprensaDto: CreateImprensaDto) {
    if(!createImprensaDto) throw new BadRequestException();
    return this.repository.create(createImprensaDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  async findOne(id: number) {
    const imprensa = await this.repository.findOne(id);
    if(!imprensa) throw new NotFoundException();

    return imprensa;
  }

  async update(id: number, updateImprensaDto: UpdateImprensaDto) {
    if(!updateImprensaDto) throw new BadRequestException();

    const imprensa = await this.repository.findOne(id);
    if(!imprensa) throw new NotFoundException();

    return imprensa;
  }

  async remove(id: number) {
    const imprensa = await this.repository.findOne(id);
    if(!imprensa) throw new NotFoundException();

    return imprensa;
  }
}
