import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UserControllerController } from '../../controllers/user-controller/user-controller.controller';
import { UserServiceService } from '../../services/user-service/user-service.service';

@Module({
    imports: [UserModuleModule],
    controllers: [UserControllerController],
    providers: [UserServiceService, PrismaService],
  })

export class UserModuleModule {}
