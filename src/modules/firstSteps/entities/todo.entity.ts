import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Todo {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;
    @ApiProperty()
    @Column("text")
    title: string;
    @ApiProperty()
    @Column({ default: false })
    isCompleted: boolean;
}