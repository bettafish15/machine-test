import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateEvent, Event, Task } from './types';
import * as fs from 'fs';
import * as path from 'path';
import { JSON_PATH } from './const';

@Injectable()
export class AppService {
  getJsonData(): Task {
    const jsonString = fs.readFileSync(
      path.join(process.cwd(), JSON_PATH),
      'utf-8',
    );

    return JSON.parse(jsonString);
  }

  saveJsonData(jsonData: Task): void {
    const newJsonString = JSON.stringify(jsonData);
    fs.writeFileSync(JSON_PATH, newJsonString);
  }

  getEvents(): Task['tasks'] {
    const jsonData = this.getJsonData();
    return jsonData.tasks;
  }

  addEvent(event: CreateEvent): Event {
    const { date, title } = event;
    const jsonData = this.getJsonData();

    const newId =
      jsonData.tasks.reduce((max, obj) => (obj.id > max ? obj.id : max), 0) + 1;

    jsonData.tasks.push({
      id: newId,
      title,
      date,
      completed: false,
    });

    this.saveJsonData(jsonData);
    return {
      id: newId,
      title,
      date,
      completed: false,
    };
  }

  deleteEvent(id: number): Event {
    const jsonData = this.getJsonData();

    const deleteEvent = jsonData.tasks.find((el) => el.id === id);
    if (!deleteEvent) {
      throw new BadRequestException('There is no event with this id');
    }
    jsonData.tasks = jsonData.tasks.filter((el) => el.id !== id);

    this.saveJsonData(jsonData);
    return deleteEvent;
  }

  markEventAsCompleted(id: number): Event {
    const jsonData = this.getJsonData();

    const index = jsonData.tasks.findIndex((el) => el.id === id);
    if (!jsonData.tasks[index]) {
      throw new BadRequestException('There is no event with this id');
    }

    if (jsonData.tasks[index].completed) {
      throw new BadRequestException('The event has already been completed');
    }

    jsonData.tasks[index].completed = true;

    this.saveJsonData(jsonData);
    return jsonData.tasks[index];
  }
}
