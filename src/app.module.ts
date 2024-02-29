import { Module } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { UserModuleModule } from './modules/user-module/user-module.module';

@Module({
  imports: [UserModuleModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
