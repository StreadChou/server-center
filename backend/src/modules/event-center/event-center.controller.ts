import {Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common';
import {EventCenterService} from './event-center.service';
import {
    CreateEventCenterBo,
    CreateEventCenterDto,
    CreateEventCenterDtoToBo, UpdateEventCenterBo,
    UpdateEventCenterDto, UpdateEventCenterDtoToBo
} from "./event-center.dto";

@Controller('event-center')
export class EventCenterController {
    constructor(private readonly eventCenterService: EventCenterService) {
    }

    @Post()
    async create(@Body() createEventCenterDto: CreateEventCenterDto) {
        const bo: CreateEventCenterBo = await CreateEventCenterDtoToBo(createEventCenterDto)
        return this.eventCenterService.create(bo);
    }

    @Get()
    findAll() {
        return this.eventCenterService.findAll();
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateEventCenterDto: UpdateEventCenterDto) {
        const bo: UpdateEventCenterBo = await UpdateEventCenterDtoToBo(updateEventCenterDto)
        return this.eventCenterService.update(+id, bo);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.eventCenterService.remove(+id);
    }
}
