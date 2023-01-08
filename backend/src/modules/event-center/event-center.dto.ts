export class CreateEventCenterDto {
    mark: string;
    params: string;
    target: string[];
}

export class CreateEventCenterBo extends CreateEventCenterDto {
}

export async function CreateEventCenterDtoToBo(data: CreateEventCenterDto): Promise<CreateEventCenterBo> {
    return data
}

export class UpdateEventCenterDto {
    mark: string;
    params: string;
    target: string[];
}

export class UpdateEventCenterBo extends UpdateEventCenterDto {
}

export async function UpdateEventCenterDtoToBo(data: UpdateEventCenterDto): Promise<UpdateEventCenterBo> {
    return data
}
