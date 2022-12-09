import { ErrorHandler, Injectable } from '@angular/core';
import { Toastrservice } from '../ToastrService/ToastrService';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService implements ErrorHandler {


  constructor(private toastrService : Toastrservice) { }
  handleError(error: any): void {
    debugger;
    this.toastrService.error(error.toString(),"Global Error");
  }
}
