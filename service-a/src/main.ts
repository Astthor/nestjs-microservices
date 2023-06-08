import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const SERVICE_A_PORT = process.env.SERVICE_A_PORT || 'http://localhost:3001';
  await app.listen(SERVICE_A_PORT);
  Logger.log(`🚀 SERVICE_A is running on: http://localhost:${SERVICE_A_PORT}`);
}
bootstrap();
