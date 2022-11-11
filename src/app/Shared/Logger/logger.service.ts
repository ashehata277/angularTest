import { Injectable } from '@angular/core';
import { ILogger } from './ilogger';

@Injectable({
  providedIn: 'root'
})
export class LoggerService implements ILogger {

  constructor() { }
  prefix: string = "Root Logger Service";
  Log(message: string):void{
    console.log(this.prefix + message);

  };

}
