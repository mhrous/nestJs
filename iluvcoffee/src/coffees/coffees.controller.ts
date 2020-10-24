import { Controller, Get, Param, Body, Post, HttpCode, Patch, HttpStatus, Delete, Query } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {

  @Get()
  findAll(@Query() paginationQuery){
    const {limit ,offset} = paginationQuery
    return `This action returns all coffees Limit :${limit} offset ${offset}`
  }

  @Get(':id')
  findOne(@Param("id") id:string){
    return `This action returns ${id} coffees`
  }


  @Post(':id')
  create(@Body() body){
    return body
  }

  @Patch(":id")
  update(@Param("id") id: string,@Body() body){
    return `This action updates ${id} coffee`
  }

  @Delete(":id")
  remove(@Param("id") id: string){
    return `This action remove ${id} coffee`
  }
}
