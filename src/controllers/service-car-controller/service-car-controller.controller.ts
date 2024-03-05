import { Controller, Body, Post } from '@nestjs/common';
import { builtinModules } from 'module';
import { ServiceCar } from 'src/dtos/service-car/service-car';
import { CarServiceService } from 'src/services/car-service/car-service/car-service.service';

@Controller('car')
export class ServiceCarController {
    constructor(private readonly carService: CarServiceService) {}

    @Post('newOrder')
    async postNewOrder(@Body() body) {
        try {
            const result = await this.carService.newOrder(body);
            return { success: true, data: result };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }
}
