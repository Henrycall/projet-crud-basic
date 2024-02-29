import { IsEmail, IsNotEmpty, IsNumber, IsString, Length } from "class-validator";

export class User {
    @IsNotEmpty()
    @Length(3, 10, { message: 'Nome precisa ter entre 3 e 10 caracteres' })
    name: string

    surname: string

    @IsNotEmpty()
    @IsNumber()
    age: number

    @IsNotEmpty()
    @Length(11)
    cpf: string

    @IsNotEmpty()
    @IsEmail()
    email: string

    id: string
}
