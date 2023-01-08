import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {AppConfig} from "./config/AppConfig";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    await app.listen(AppConfig.env.PORT);
}

bootstrap();
