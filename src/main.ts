import type { NestExpressApplication } from '@nestjs/platform-express';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { port } from './utils/configs/envConfig';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    rawBody: true
  });
  await app.listen(port);
  console.log(`app listening at http://localhost:${port}`);
  
}
bootstrap();
