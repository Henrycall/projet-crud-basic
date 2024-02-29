import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { User } from '../../dtos/user/user';
import { PrismaService } from '../../database/prisma.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UserServiceService {
    constructor(private prisma:PrismaService){}

    async CreateUser(body: User) {
        const { name ,age ,cpf ,email ,surname} = body
        const user = await this.prisma.user.create({
          data: {
            id: uuidv4(),
            name, 
            age,
            cpf,
            email,
            surname
          }
        })
        return user
      }

      async FindUser(query: { cpf?: string; email?: string }) {
        const { cpf, email } = query;
        try {
          const user = await this.prisma.user.findFirst({
            where: {
              ...(cpf ? { cpf } : {}),
              ...(email ? { email } : {}),
            },
          });
    
         return user
        } catch (error) {

          throw new BadRequestException('Erro ao processar a requisição');
        }
      }

    }











