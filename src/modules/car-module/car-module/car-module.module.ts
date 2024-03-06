import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CarServiceService } from 'src/services/car-service/car-service/car-service.service';
import { ServiceCarController } from '../../../controllers/service-car-controller/service-car-controller.controller'


@Module({
    imports: [],
    controllers: [ServiceCarController],
    providers: [PrismaService,CarServiceService],
})

export class CarModuleModule {}



