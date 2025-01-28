import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api')
  app.use(cookieParser())
  app.enableCors({
    origin: ['http://localhost3001'],  // Allows access only from this domain
    credentials: true, // Allows you to send cookies and other credentials
    exposedHeaders: 'set-cookie'   // Allows sending the 'set-cookie' header in the response
  })

  await app.listen(4200);
}
bootstrap();
 