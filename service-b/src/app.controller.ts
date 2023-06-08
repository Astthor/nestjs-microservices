import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private readonly logger: Logger = new Logger('SERVICE_B_CONTROLLER');

  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    this.logger.log('getHello called in service-b AppController');
    return this.appService.getHello();
  }
}
