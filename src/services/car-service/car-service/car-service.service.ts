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
            const user = await this.prisma.user.findUnique({
                where: {
                    id: userId,
                },
            });

            if (!user)  throw new BadRequestException('Usuário não encontrado');
            
            const prismaServiceCar: PrismaServiceCar = {
                userId, 
                plate,
                brand,
                model,
                year,
                carPart,
                valor,
                serviceID: uuidv4(),
                createdAt: new Date()
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
