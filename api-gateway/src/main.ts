import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const API_GATEWAY_PORT = process.env.API_GATEWAY_PORT || 3000;
  const SERVICE_A_URL = process.env.SERVICE_A_URL || 'http://localhost:3001';
  const SERVICE_B_URL = process.env.SERVICE_B_URL || 'http://localhost:3002';
  app.use(
    '/api/service-a',
    createProxyMiddleware({
      target: SERVICE_A_URL,
      changeOrigin: true,
      onProxyReq: (clientRequest, req) => {
        Logger.log('Proxy for service A called');
      },
    }),
  );
  app.use(
    '/api/service-b',
    createProxyMiddleware({
      target: SERVICE_B_URL,
      changeOrigin: true,
      onProxyReq: (clientRequest, req) => {
        Logger.log('Proxy for service B called');
      },
    }),
  );
  await app.listen(API_GATEWAY_PORT);
  Logger.log(
    `🚀 API_GATEWAY is running on: http://localhost:${API_GATEWAY_PORT}/${globalPrefix}`,
  );
}
bootstrap();
