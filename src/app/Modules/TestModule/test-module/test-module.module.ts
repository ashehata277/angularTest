import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainComponentComponent } from './MainComponent/main-component/main-component.component';
import { TestModuleFormSerivce } from './MainComponent/test-module-form-service';



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
