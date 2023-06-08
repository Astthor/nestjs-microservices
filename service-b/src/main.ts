import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const SERVICE_B_PORT = process.env.SERVICE_B_PORT || 3002;
  const globalPrefix = 'api/service-b';
  app.setGlobalPrefix(globalPrefix);
  await app.listen(SERVICE_B_PORT);
  Logger.log(
    `🚀 SERVICE_B is running on: http://localhost:${SERVICE_B_PORT}/${globalPrefix}`,
  );
}
bootstrap();
