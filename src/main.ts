import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // Will transform json into the DTO
      whitelist: true, // Will ignore json validation on props not listed at DTO
      forbidNonWhitelisted: true, // Error thrown if client send prop not listed on DTO
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
