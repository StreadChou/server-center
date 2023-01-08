import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity("event-center")
export class EventCenterEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({comment: "备注"})
    mark: string;

    @Column({unique: true, comment: "请求参数"})
    params: string;

    @Column({type: "json", comment: "转发对象"})
    target: string[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
