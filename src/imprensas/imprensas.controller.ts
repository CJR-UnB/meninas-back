import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ImprensasService } from './imprensas.service';
import { CreateImprensaDto } from './dto/create-imprensa.dto';
import { UpdateImprensaDto } from './dto/update-imprensa.dto';

@Controller('imprensas')
export class ImprensasController {
  constructor(private readonly imprensasService: ImprensasService) {}

  @Post()
  create(@Body() createImprensaDto: CreateImprensaDto) {
    return this.imprensasService.create(createImprensaDto);
  }

  @Get()
  findAll() {
    return this.imprensasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imprensasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateImprensaDto: UpdateImprensaDto) {
    return this.imprensasService.update(+id, updateImprensaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imprensasService.remove(+id);
  }
}
