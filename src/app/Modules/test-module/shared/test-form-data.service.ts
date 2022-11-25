import { Inject, Injectable } from '@angular/core';
import { Subject, withLatestFrom } from 'rxjs';
import { TestModuleValidator } from './test-module-validator';
import { ModuleValidatorTypes } from './ValidatorsTypesEnum';

@Injectable()
export class TestFormDataService {

  constructor(@Inject(TestModuleValidator) private moduleValidators: ReadonlyArray<TestModuleValidator<any>>) {
    let sub1 = new Subject<number>();
    let sub2 = new Subject<string>();
    let sub3 = new Subject<number>();


    // const combine = combineLatest([sub1, sub2, sub3]).pipe(map(([val1, val2, val3]) =>
    //   val1 + val2 + val3
    // ));

    // const fork = forkJoin([sub1, sub2, sub3]).pipe(map(([val1, val2, val3]) => val1 + val2 + val3));

    const withlatest = sub1.pipe(withLatestFrom(sub2,sub3));


    // combine.subscribe({
    //   next: (res) => { console.log(res) },
    //   error: () => { },
    // });

    // fork.subscribe({
    //   next: (res) => { console.log(res) },
    //   error: () => { },
    // })


    // sub1.next(1);
    // sub2.next(2);
    // sub3.next(3);
    // sub2.next(4);sub1.next(1);


    withlatest.subscribe({
      next: ([res1,res2,res3]) => { console.log(res1) ;
        console.log(res2);
        console.log(res3);
      },
      error: () => { },
    })


    sub2.next("ahmed");
    sub3.next(10);
    sub1.next(4);


    // sub1.complete();
    // sub2.complete();
    // sub3.complete();
    const permissionValidator =  this.moduleValidators.find(x=>x.Type === ModuleValidatorTypes.PermissionValidator);
    const permissionValidatorResult =permissionValidator?.Validate(withlatest);
    console.log(permissionValidatorResult);

    console.log(this.moduleValidators);
    this.moduleValidators.forEach(validator => console.log(validator.Validate(null)));

  }
}
