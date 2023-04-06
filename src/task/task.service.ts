import { Injectable } from '@nestjs/common';
import { ITask } from './task.interface';
import { TaskDTO } from './dto/task.dto';
import { v4 as uuidv4 } from 'uuid';

// @Injectable() indica que pude servir como provider y que puede ser inyectada en constructor
// via parametro de contructor del nestjs dependency injection
@Injectable()
export class TaskService {

    tasks: ITask[] = [];

    // getAll
    findAll(): ITask[] {
        return this.tasks;
    }

    // getById
    findById( id: string) : ITask {
        return this.tasks.find(task => task.id === id);
    }

    // post
    create( taskDTO: TaskDTO ) : ITask { 
        const task = {
            id: uuidv4(),
            ...taskDTO,
        };

        this.tasks.push(task);
        return task;
    }

    // update
    update(id: string, taskDTO: TaskDTO): ITask {
        
        const newTask = { id, ...taskDTO };

        this.tasks = this.tasks.map( (t) => ( t.id === id ? newTask : t ));

        return newTask;
    }

    // delete
    delete(id: string) : string {
        this.tasks = this.tasks.filter( (t) => t.id !== id);

        return "Task deleted";
    }
}
