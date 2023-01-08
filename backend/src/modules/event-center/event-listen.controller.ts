import {Body, Controller, Get, Param, Post, Query} from '@nestjs/common';
import {EventCenterService} from "./event-center.service";
import axios from "axios";

@Controller('event-listen')
export class EventListenController {
    constructor(private readonly eventCenterService: EventCenterService) {
    }

    @Post("listen/:params")
    async listen_post(@Param('params') params: string, @Body() body: any) {
        process.nextTick(async () => {
            const entity = await this.eventCenterService.findOneByParams(params)
            await Promise.all(entity.target.map(ele => {
                return axios.post(ele, body);
            }))
        })
        return {success: true}

    }

    @Get("listen/:params")
    async listen_get(@Param('params') params: string, @Query() query: any) {
        process.nextTick(async () => {
            const entity = await this.eventCenterService.findOneByParams(params)
            await Promise.all(entity.target.map(ele => {
                return axios.get(ele, {params: query});
            }))
        })
        return {success: true}
    }

    @Post("test")
    test_post(@Body() body: any) {
        console.log("listen_test_post: ", body)
        return {success: true}
    }

    @Get("test")
    test_get(@Query() query: any) {
        console.log("listen_test_get: ", query)
        return {success: true}
    }
}
