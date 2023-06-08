import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private readonly logger: Logger = new Logger('SERVICE_A_CONTROLLER');

  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    this.logger.log('getHello called in service-a AppController');
    return this.appService.getHello();
  }
}
