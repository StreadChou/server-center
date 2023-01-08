import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {EventCenterEntity} from "./entities/event-center.entity";
import {Repository} from "typeorm";
import {CreateEventCenterBo, UpdateEventCenterBo} from "./event-center.dto";

@Injectable()
export class EventCenterService {
    constructor(
        @InjectRepository(EventCenterEntity)
        private eventCenterEntityRepository: Repository<EventCenterEntity>
    ) {

    }

    async create(createEventCenterDto: CreateEventCenterBo) {
        let entity: EventCenterEntity = this.eventCenterEntityRepository.create(createEventCenterDto);
        return this.eventCenterEntityRepository.save(entity);
    }

    findAll() {
        return this.eventCenterEntityRepository.find();
    }

    findOneByParams(params: string) {
        return this.eventCenterEntityRepository.findOneBy({params: params})
    }

    async update(id: number, updateEventCenterDto: UpdateEventCenterBo) {
        let entity = await this.eventCenterEntityRepository.findOneOrFail({where: {id: id}})
        entity = this.eventCenterEntityRepository.merge(entity, updateEventCenterDto);
        return this.eventCenterEntityRepository.save(entity);
    }

    async remove(id: number) {
        let entity = await this.eventCenterEntityRepository.findOneOrFail({where: {id: id}})
        return this.eventCenterEntityRepository.remove(entity);
    }
}
