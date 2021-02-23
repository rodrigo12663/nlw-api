import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column } from 'typeorm';

@Entity('users')
export default class User{
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    name:string;

    @Column()
    email:string;

    @CreateDateColumn()
    created_at:Date;

    @UpdateDateColumn()
    update_at:Date;


}