import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { ViewComponent } from './pages/view.component';
import { FormComponent } from './components/form/form.component';
import { TableComponent } from './components/table/table.component';


@NgModule({
  declarations: [
    ViewComponent,
    FormComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
