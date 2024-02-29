import { IsString, IsNotEmpty, IsNumber, IsCurrency } from "class-validator";
import { User } from "src/dtos/user/user";

export class ServiceCar {
   user: User
   
   @IsString()
   plate: String

   @IsString()
   brand: String

   @IsNotEmpty()
   model: string;

   @IsNotEmpty()
   @IsNumber({}, { message: 'Ano do carro precisa ser um número' })
   year: number;

   @IsNotEmpty()
   carPart: string;

   @IsNotEmpty()
   @IsString({ message: 'O valor precisa ser uma string' })
 //  @IsCurrency({ symbol: 'R$', allow_negatives: false, allow_decimal: true })
  // @Transform(valor => parseFloat(), { toClassOnly: true }) // Transforma a string em número
   valor: number;

   serviceID: String
}
