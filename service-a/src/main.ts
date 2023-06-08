import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const SERVICE_A_PORT = process.env.SERVICE_A_PORT || 3001;
  const globalPrefix = 'api/service-a';
  app.setGlobalPrefix(globalPrefix);
  await app.listen(SERVICE_A_PORT);
  Logger.log(
    `🚀 SERVICE_A is running on: http://localhost:${SERVICE_A_PORT}/${globalPrefix}`,
  );
}
bootstrap();
