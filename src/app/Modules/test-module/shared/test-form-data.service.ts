import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TestModuleValidator } from './test-module-validator';

@Injectable()
export class TestFormDataService {

  constructor(@Inject(TestModuleValidator) private moduleValidators: ReadonlyArray<TestModuleValidator>) {
    const obs = new Observable(subscriber => {
      subscriber.next(1);
    });



    obs.subscribe({
      next: (value) => { },
      error: (error) => { },
      complete: () => { }
    });


    console.log(this.moduleValidators);
    this.moduleValidators.forEach(validator => console.log(validator.Validate(null)));

  }
}
