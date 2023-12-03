import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*',
  });

  app.connectMicroservice;

  app.setGlobalPrefix('/api/v1');
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      url: process.env.NODE_ENV !== 'local' ? 'localhost:50051' : 'localhost:5000',
      package: ['storage'],
      protoPath: ['src/prototypes/interfaces/storage.proto'],
      maxReceiveMessageLength: 1024 * 1024 * 1024,
      maxSendMessageLength: 1024 * 1024 * 1024,
    },
  });

  await app.startAllMicroservices();

  app.listen(process.env.APP_PORT || 3000, () => {
    console.log('App is listening on port ', process.env.APP_PORT || 3000);
  });
}
bootstrap();
