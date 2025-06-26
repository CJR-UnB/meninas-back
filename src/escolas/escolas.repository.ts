import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateEscolaDto } from "./dto/create-escola.dto";
import { UpdateEscolaDto } from "./dto/update-escola.dto";



@Injectable()
export class EscolasRepository {
    constructor(private readonly prisma: PrismaService) {}

    create(createEscolaDto: CreateEscolaDto) {
        return this.prisma.escola.create({
            data: {... createEscolaDto}
        })
    }

    findAll() {
        return this.prisma.escola.findMany();
    }

    findOne(id: number) {
        return this.prisma.escola.findFirst({
            where: {id}
        })
    }

    update(id: number, updateEscolaDto: UpdateEscolaDto) {
        return this.prisma.escola.update({
            data: {...updateEscolaDto},
            where: {id}
        })
    }

    remove(id: number) {
        return this.prisma.escola.delete({
            where: {id}
        })
    }
}