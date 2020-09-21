import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FirstSteps {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;



    @Column({ default: false })
    isCompleted: boolean;
}