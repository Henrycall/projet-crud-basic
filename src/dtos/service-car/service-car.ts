import { IsString, IsNotEmpty, IsNumber, IsCurrency } from "class-validator";
import { User } from "@prisma/client";

export class ServiceCar {
   userId: string; // Adicionado o campo userId

   @IsString()
   plate: string;

   @IsString()
   brand: string;

   @IsNotEmpty()
   model: string;

   @IsNotEmpty()
   @IsNumber({}, { message: 'Ano do carro precisa ser um número' })
   year: number;

   @IsNotEmpty()
   carPart: string;

   @IsNotEmpty()
   @IsString({ message: 'O valor precisa ser uma string' })
   valor: number;

   serviceID: string;

   constructor(userId: string, plate: string, brand: string, model: string, year: number, carPart: string, valor: number, serviceID: string) {
      this.userId = userId;
      this.plate = plate;
      this.brand = brand;
      this.model = model;
      this.year = year;
      this.carPart = carPart;
      this.valor = valor;
      this.serviceID = serviceID;
   }
}
