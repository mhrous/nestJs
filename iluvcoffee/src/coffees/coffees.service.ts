import {
  Body,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees :Coffee[]=[
    {
      id:1,
      name:"Shipwreck Rost",
      brand:"Buddy Brew",
      flavors:["chocolate",'vanilla']
    }
  ]

  findAll(){
    return this.coffees
  }

  findOne(id:string){
    const coffee= this.coffees.find(item=>item.id=== +id)
    if(!coffee){
      throw new NotFoundException(`coffee with id ${id} not found`)
    }
    return coffee
  }


  create(createCoffeeDto: any){
    this.coffees.push(createCoffeeDto)
    return createCoffeeDto

  }

  update(id: string,createCoffeeDto: any){
    const existingCoffee= this.findOne(id)
   if(existingCoffee){}
  }

  remove(id: string){
    const coffeeIndex= this.coffees.findIndex(item => item.id === +id);
    if(coffeeIndex=>0){
      this.coffees.splice(coffeeIndex,1)
    }
  }



}

