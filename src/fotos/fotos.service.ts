import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateFotoDto } from './dto/create-foto.dto';
import { UpdateFotoDto } from './dto/update-foto.dto';
import { FotosRepository } from './fotos.repository';

@Injectable()
export class FotosService {

  constructor(private readonly repository: FotosRepository) {}

  create(createFotoDto: CreateFotoDto) {
    if(!createFotoDto) throw new BadRequestException();
    return this.repository.create(createFotoDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  async findOne(id: number) {
    const foto = await this.repository.findOne(id);
    if(!foto) throw new NotFoundException();

    return foto;
  }

  async update(id: number, updateFotoDto: UpdateFotoDto) {
    if(!updateFotoDto) throw new BadRequestException();
    const foto = await this.repository.findOne(id);
    
    if(!foto) throw new NotFoundException();

    return this.repository.update(id, updateFotoDto);
  }

  async remove(id: number) {
    const foto = await this.repository.findOne(id);
    if(!foto) throw new NotFoundException();
    
    return this.repository.remove(id);
  }
}
