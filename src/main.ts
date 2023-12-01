import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice;

  app.setGlobalPrefix('/api/v1');
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: ['storage'],
      protoPath: ['src/prototypes/interfaces/storage.proto'],
      maxReceiveMessageLength: 1024 * 1024 * 1024,
      maxSendMessageLength: 1024 * 1024 * 1024,
    },
  });

  app.startAllMicroservices();

  app.listen(process.env.APP_PORT || 3000, () => {
    console.log('App is listening on port ', process.env.APP_PORT || 3000);
  });
}
bootstrap();
