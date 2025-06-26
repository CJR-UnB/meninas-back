import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EscolasService } from './escolas.service';
import { CreateEscolaDto } from './dto/create-escola.dto';
import { UpdateEscolaDto } from './dto/update-escola.dto';

@Controller('escolas')
export class EscolasController {
  constructor(private readonly escolasService: EscolasService) {}

  @Post()
  create(@Body() createEscolaDto: CreateEscolaDto) {
    return this.escolasService.create(createEscolaDto);
  }

  @Get()
  findAll() {
    return this.escolasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.escolasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEscolaDto: UpdateEscolaDto) {
    return this.escolasService.update(+id, updateEscolaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.escolasService.remove(+id);
  }
}
