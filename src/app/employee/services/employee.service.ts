import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Employee } from '../model/employee';
import { FormEmployee } from '../model/form-employee';
import { EmployeeProxyService } from './employee-proxy.service';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  constructor(private proxy: EmployeeProxyService) { }

  getEmployees(): Observable<Employee[]> {

    return this.proxy.getAllEmployees$().pipe(
      map(formEmployee => {
        let employees: Employee[] = [];
        formEmployee.map(formEmployee => {
          employees = [...employees, this.adaptDTOToModel(formEmployee)];
        });

        return employees;
      })
    );
  }

  getEmployee(employeeId: number): Observable<Employee> {

    return this.proxy.getEmployeeById$(employeeId).pipe(
      map(formEmployee => this.adaptDTOToModel(formEmployee))
    );
  }

  createEmployee(employee: Employee): Observable<Employee> {

    return this.proxy.createEmployee$(employee);
  }

  deleteEmployee(employeeId: number): Observable<Employee> {

    return this.proxy.deleteEmployee$(employeeId).pipe(
      map(formEmployee => this.adaptDTOToModel(formEmployee))
    );

  }

  updateEmployee(employeeId: number, employee: Employee): Observable<Employee> {

    return this.proxy.updateEmployee$(employeeId, this.adaptModelTODTO(employee)).pipe(
      map(formEmployee => this.adaptDTOToModel(formEmployee))
    );
  }

  private adaptDTOToModel(formEmployee: FormEmployee): Employee {

    return {
      id: formEmployee.id,
      firstName: formEmployee.firstName,
      lastName: formEmployee.lastName,
      emailId: formEmployee.emailId
    };
  }

  private adaptModelTODTO(employee: Employee): FormEmployee {

    return {
      id: employee.id,
      firstName: employee.firstName,
      lastName: employee.lastName,
      emailId: employee.emailId
    };
  }
}
