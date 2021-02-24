import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column } from 'typeorm';

@Entity('surveys')
export default class Survey{
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    title:string;

    @Column()
    description:string;

    @CreateDateColumn()
    created_at:Date;

    @UpdateDateColumn()
    update_at:Date;


}