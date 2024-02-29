import { Controller, Query, NotFoundException, BadRequestException,HttpCode } from '@nestjs/common';
import { Body, Get, Post, Put } from '@nestjs/common';
import { User } from '../../dtos/user/user';
import { UserServiceService } from '../../services/user-service/user-service.service'

@Controller('user')
export class UserControllerController {
    constructor(private readonly userService: UserServiceService) {}

    @Post('CreateUser')
      async CreateUser(@Body() body:User) {
      
      return await this.userService.CreateUser(body);
    }
  
    @Put('Edit/user')
      async EditUser(@Body() body:User) {
      
      return await this.userService.CreateUser(body);
    }

    @Get('find')
    async FindUserController(@Query('cpf') cpf: string, @Query('email') email: string) {
      if (!cpf && !email) {
        throw new BadRequestException('É necessário fornecer pelo menos o cpf ou email como parâmetros na URL');
      }
      try {
        const user = await this.userService.FindUser({ cpf, email });
    
        if (!user) return new NotFoundException('Usuário não encontrado');
        return user
      } catch (error) {
        throw new BadRequestException('Erro ao processar a requisição');
      }
    }
}
