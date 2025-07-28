import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }
  @Get(':id')
  getCarsById(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.findOneById(id);
  }
  @Post()
  createCar(@Body() CreateCarDto: CreateCarDto) {
    return CreateCarDto;
  }
  @Patch(':id')
  updateCar(@Body() body: any) {
    return body;
  }
  @Put(':id')
  updateOneCar(@Body() body: any) {
    return body;
  }
  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return {
        method: 'DELETE',
        id,
    };
  }
}
