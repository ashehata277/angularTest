import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModuleModule } from 'src/app/Services/SharedModule/shared-module/shared-module.module';
import { MainComponentComponent } from './main-component/main-component.component';
import { Service } from './shared/dataservice.service';
import { HasPermissionValidatorService } from './shared/has-permission-validator.service';
import { TestFormDataService } from './shared/test-form-data.service';
import { TestShellComponent } from './test-shell/test-shell.component';
import { TestModuleValidator } from './shared/test-module-validator';




@NgModule({
  declarations: [
    MainComponentComponent,
    TestShellComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: MainComponentComponent },
    ]),
    SharedModuleModule
  ],
  providers: [
    TestFormDataService,
    {
      provide: TestModuleValidator,
      useClass: HasPermissionValidatorService,
      multi: true
    },
    Service
    ]
})
export class TestModuleModule { }
