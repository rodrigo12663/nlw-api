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
    created_at:string;

    @UpdateDateColumn()
    update_at:string;
}