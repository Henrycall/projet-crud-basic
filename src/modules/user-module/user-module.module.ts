import { Module } from '@nestjs/common';
import { UserControllerController } from '../../controllers/user-controller/user-controller.controller';
import { UserServiceService } from '../../services/user-service/user-service.service';
import { PrismaService } from '../../database/prisma.service';

@Module({
    imports: [UserModuleModule],
    controllers: [UserControllerController],
    providers: [ PrismaService, UserServiceService],
  })

export class UserModuleModule {}
