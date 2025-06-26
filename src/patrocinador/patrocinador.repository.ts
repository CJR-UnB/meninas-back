import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreatePatrocinadorDto } from "./dto/create-patrocinador.dto";
import { UpdatePatrocinadorDto } from "./dto/update-patrocinador.dto";


@Injectable()
export class PatrocinadorRepository {
    constructor(private prisma: PrismaService){}
    
    async create(createPatrocinadorDto: CreatePatrocinadorDto) {
        return this.prisma.patrocinador.create({
            data: { ...createPatrocinadorDto }
        })
    }

    async findAll(){
        return this.prisma.patrocinador.findMany();
    }

    async findOne(id: number){
        return this.prisma.patrocinador.findFirst({
            where: {id}
        })
    }

    async update(id: number, updatePatrocinadorDto: UpdatePatrocinadorDto){
        return this.prisma.patrocinador.update({
            data: { ...updatePatrocinadorDto },
            where: {id}}
        )
    }

    async remove(id: number){
        return this.prisma.patrocinador.delete({
            where: {id}
        })
    }
}