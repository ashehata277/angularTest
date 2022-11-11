import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class ExprementalLoggerService implements LoggerService {

  constructor() { }
  prefix: string = "Expremental Service";
  Log(message: string): void {
    console.log(this.prefix + message);
  }
}
