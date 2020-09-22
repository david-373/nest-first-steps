import { Controller, Delete, Get, Post, Put, Param, Body } from '@nestjs/common';
import { Todo } from '../entities/todo.entity'
import { CreateDto, UpdateDto } from './dto';
@Controller('rest/firststeps')
export class TodoController {

    @Get()
    gwtAllAction(): string {
        return 'Todo get All'
    }
    @Get(':id')
    getOneAction(@Param('id') id: string): string {
        return 'Todo get One by id=' + id
    }

    @Post()
    createAction(@Body() todo: CreateDto): CreateDto {

        console.log(todo);
        return todo
    }

    @Put(':id')
    updateAction(
        @Param('id') id: string,
        @Body() todo: UpdateDto
    ): UpdateDto {
        console.log('Searche by id', id);
        console.log(todo, 'saved');
        return todo
    }

    @Delete(':id')
    deleteAction(@Param('id') id: string): string {
        return 'Delete Todo by id=' + id
    }
}