import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {EventCenterModule} from './modules/event-center/event-center.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {AppConfig} from "./config/AppConfig";
import {ServeStaticModule} from '@nestjs/serve-static';
import * as path from "path";

@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: path.join(__dirname, "../../frontend/dist/spa"),
        }),
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: AppConfig.env.db_host,
            port: AppConfig.env.db_port,
            username: AppConfig.env.db_username,
            password: AppConfig.env.db_password,
            database: AppConfig.env.db_database,
            entities: [],
            synchronize: true,
            autoLoadEntities: true,
        }),
        EventCenterModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
