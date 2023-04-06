import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { AllExceptionFilter } from './common/filtros/http-exception.filter';
import { TimeOutInterceptor } from './common/interceptors/timeout.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // middleware de validación para modelos y clases
  app.useGlobalPipes( new ValidationPipe());
  // middleware para capturar excepciones globales y no estar haciendo try-catch a cada rato
  app.useGlobalFilters(new AllExceptionFilter());
  // middleware de los interceptores
  app.useGlobalInterceptors( new TimeOutInterceptor());
  await app.listen(3000);
}
bootstrap();
