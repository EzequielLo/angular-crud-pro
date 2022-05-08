import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { TableComponent } from './components/table/table.component';
import { IsSaveGuard } from './guards/is-save.guard';
import { ViewComponent } from './pages/view.component';
import { EmployeeIdResolver } from './resolvers/employee-id.resolver';

const routes: Routes = [
  {
    path: '',
    component: ViewComponent,
    children: [
      { path: 'data', component: TableComponent },
      { path: 'add', component: FormComponent },
      {
        path: 'edit/:id', component: FormComponent, canDeactivate: [IsSaveGuard],
        resolve: {
          employee: EmployeeIdResolver
        }
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
