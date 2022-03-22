import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { Observable, of } from 'rxjs';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('queet:find-all')
  fetchAllQueets(): Observable<string> {
    return of('test');
  }
}
