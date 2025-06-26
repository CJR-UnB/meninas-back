import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateFotoDto } from "./dto/create-foto.dto";
import { UpdateFotoDto } from "./dto/update-foto.dto";

@Injectable()
export class FotosRepository {
    constructor(private readonly prisma: PrismaService) {}

    create(createFotoDto: CreateFotoDto) {
        return this.prisma.foto.create({
            data: {...createFotoDto}
        })
    }

    findAll() {
        return this.prisma.foto.findMany({
            include: {
                evento: true
            }
        })
    }

    findOne(id: number) {
        return this.prisma.foto.findFirst({
            where: {id},
            include: {
                evento: true
            }
        })
    } 

    update(id: number, updateFotoDto: UpdateFotoDto) {
        return this.prisma.foto.update({
            where: {id},
            data: {... updateFotoDto}
        })
    }

    remove(id: number) {
        return this.prisma.foto.delete({
            where: {id}
        })
    }
}