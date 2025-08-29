import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { ReclutierService } from './reclutier.service';

@Controller('reclutier')
export class ReclutierController {
  constructor(private readonly reclutierService: ReclutierService) {}

  @Post()
  async create(@Body() body: any) {
    if (!body.name || !body.suraname) {
      throw new BadRequestException("Name y Surname son obligatorios");
    }

    return this.reclutierService.create(body);
  }
}
