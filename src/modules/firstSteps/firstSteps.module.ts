import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FirstSteps } from './entities/firstSteps.entity'

@Module({
    imports: [TypeOrmModule.forFeature([FirstSteps])],

    controllers: [],
    providers: [],
})
export class FirstStepsModule { }
