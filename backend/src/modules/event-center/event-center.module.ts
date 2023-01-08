import {Module} from '@nestjs/common';
import {EventCenterService} from './event-center.service';
import {EventCenterController} from './event-center.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {EventCenterEntity} from "./entities/event-center.entity";
import {EventListenController} from "./event-listen.controller";

@Module({
    imports: [
        TypeOrmModule.forFeature([EventCenterEntity])
    ],
    controllers: [EventCenterController, EventListenController],
    providers: [EventCenterService]
})
export class EventCenterModule {
}
