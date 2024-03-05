import { Module } from '@nestjs/common';
import { PrismaService } from '../../../database/prisma.service';
import { ServiceCarControllerController } from '../../../controllers/service-car-controller/service-car-controller.controller'

@Module({
    imports: [],
    controllers: [ServiceCarControllerController],
    providers: [ PrismaService, ],
})

export class CarModuleModule {}



