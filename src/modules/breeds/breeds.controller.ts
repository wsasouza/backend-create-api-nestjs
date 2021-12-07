import { Controller, Get } from '@nestjs/common';

@Controller('breeds')
export class BreedsController {
  @Get()
  findAll(): string {
    return 'List all breeds';
  }
}
