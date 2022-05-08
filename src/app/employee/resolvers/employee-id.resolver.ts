import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Employee } from '../model/employee';
import { EmployeeStoreService } from '../services/employee-store.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeIdResolver implements Resolve<Employee> {
  constructor(private storeService: EmployeeStoreService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.storeService.findemployee(Number(route.paramMap.get("id")));
  }
}
