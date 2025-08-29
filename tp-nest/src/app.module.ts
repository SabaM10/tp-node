import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReclutierController } from './reclutier/reclutier.controller';
import { ReclutierService } from './reclutier/reclutier.service';

@Module({
  imports: [],
  controllers: [AppController, ReclutierController],
  providers: [AppService, ReclutierService],
})
export class AppModule {}
