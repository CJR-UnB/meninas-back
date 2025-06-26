import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateImprensaDto } from "./dto/create-imprensa.dto";
import { UpdateImprensaDto } from "./dto/update-imprensa.dto";


@Injectable()
export class ImprensasRepository {
    constructor(private readonly prisma: PrismaService) {}

    create(createImprensaDto: CreateImprensaDto) {
        return this.prisma.imprensa.create({
            data: {... createImprensaDto}
        })
    }

    findOne(id: number) {
        return this.prisma.imprensa.findFirst({
            where: {id}
        })
    }

    findAll() {
        return this.prisma.imprensa.findMany();
    }

    update(id: number, updateImprensaDto: UpdateImprensaDto) {
        return this.prisma.imprensa.update({
            data: {...updateImprensaDto},
            where: {id}
        })
    }

    remove(id: number) {
        return this.prisma.imprensa.delete({
            where: {id}
        })
    }
}