import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestFormDataService {

  constructor() {
    const obs  = new Observable(subscriber => {
      subscriber.next(1);
      subscriber.complete();
    });



    obs.subscribe({
      next: (value) =>{},
      error : (error)=>{},
      complete: () =>{}
    });
   }
}
