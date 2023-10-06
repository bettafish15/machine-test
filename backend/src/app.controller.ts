import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateEvent, Event, Task } from './types';

@Controller('events')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getEvents(): Task['tasks'] {
    return this.appService.getEvents();
  }

  @Post()
  addEvent(@Body() event: CreateEvent): Event {
    return this.appService.addEvent(event);
  }

  @Delete(':id')
  deleteEvent(@Param('id', ParseIntPipe) id: number): Event {
    return this.appService.deleteEvent(id);
  }

  @Post(':id/markAsCompleted')
  markAsCompleted(@Param('id', ParseIntPipe) id: number): Event {
    return this.appService.markEventAsCompleted(id);
  }
}
