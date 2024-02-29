import { Test, TestingModule } from '@nestjs/testing';
import { ServiceCarControllerController } from './service-car-controller.controller';

describe('ServiceCarControllerController', () => {
  let controller: ServiceCarControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServiceCarControllerController],
    }).compile();

    controller = module.get<ServiceCarControllerController>(ServiceCarControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
