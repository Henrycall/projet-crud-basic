import { Module } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { CarModuleModule } from './modules/car-module/car-module/car-module.module';
import { UserModuleModule } from './modules/user-module/user-module.module';

@Module({
  imports: [UserModuleModule, CarModuleModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
