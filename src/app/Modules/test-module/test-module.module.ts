import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TestModuleFormSerivce } from './Shared/test-module-form-service';
import { MainComponentComponent } from './main-component/main-component.component';




@NgModule({
  declarations: [
    MainComponentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'', component:MainComponentComponent}
    ])
  ],
  providers:[TestModuleFormSerivce]
})
export class TestModuleModule { }
