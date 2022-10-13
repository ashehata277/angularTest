import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainComponentComponent } from './main-component/main-component.component';
import { SharedModuleModule } from 'src/app/Services/SharedModule/shared-module/shared-module.module';
import { TestShellComponent } from './test-shell/test-shell.component';
import { TestFormDataService } from './shared/test-form-data.service';




@NgModule({
  declarations: [
    MainComponentComponent,
    TestShellComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'', component:MainComponentComponent},
    ]),
    SharedModuleModule
    ],
  providers:[TestFormDataService]
})
export class TestModuleModule { }
