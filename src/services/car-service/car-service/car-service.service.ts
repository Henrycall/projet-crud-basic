import { Injectable, BadRequestException } from '@nestjs/common';
import { ServiceCar } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { ServiceCar as PrismaServiceCar, User, Prisma } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CarServiceService {
    constructor(private prisma: PrismaService) {}

    async newOrder(body: ServiceCar) {
        try {
            const { userId, plate, brand, model, year, carPart, valor, serviceID } = body;

            // Verifica se o usuário existe
            const user = await this.prisma.user.findUnique({
                where: {
                    id: userId,
                },
            });

            if (!user) {
                throw new BadRequestException('Usuário não encontrado');
            }

            // Cria um objeto com a estrutura esperada pelo Prisma
            const prismaServiceCar: PrismaServiceCar = {
                id: uuidv4(), 
                plate,
                brand,
                model,
                year,
                carPart,
                valor,
                serviceID,
                userId,
                createdAt: new Date(), 
            };

    
            const createdServiceCar = await this.prisma.serviceCar.create({
                data: prismaServiceCar,
            });

            return createdServiceCar;
        } catch (error) {
            throw new BadRequestException('Erro ao processar a requisição');
        }
    }
}
