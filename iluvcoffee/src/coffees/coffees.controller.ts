import { Controller, Get, Param, Body, Post, HttpCode, Patch, HttpStatus, Delete, Query } from '@nestjs/common';
import {CoffeesService} from "./coffees.service"
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {

  constructor(private readonly coffeesService:CoffeesService) {}


  @Get()
  findAll(@Query() paginationQuery){
    // const {limit ,offset} = paginationQuery
    return this.coffeesService.findAll()
  }

  @Get(':id')
  findOne(@Param("id") id:string){
    return this.coffeesService.findOne(id)
  }


  @Post(':id')
  create(@Body() createCoffeeDto:CreateCoffeeDto){
    return this.coffeesService.create(createCoffeeDto)
  }

  @Patch(":id")
  update(@Param("id") id: string,@Body() updateCoffeeDtp:UpdateCoffeeDto){
    return this.coffeesService.update(id,updateCoffeeDtp)
  }

  @Delete(":id")
  remove(@Param("id") id: string){
    return this.coffeesService.remove(id)
  }
}
