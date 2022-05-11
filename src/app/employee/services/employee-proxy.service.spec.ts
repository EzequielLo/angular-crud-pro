import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Employee } from '../model/employee';
import { EmployeeProxyService } from './employee-proxy.service';

describe('EmployeeProxyService', () => {
  const baseURL = "http://localhost:8080/api/v1/employees";
  const fakeEmployees: Employee[] = [
    {
      id: 1,
      firstName: 'test',
      lastName: 'Test unit',
      emailId: 'test@unit.com',
    },
  ];

  const fakeEmployee: Employee =
  {
    id: 1,
    firstName: 'test',
    lastName: 'Test unit',
    emailId: 'test@unit.com',
  };

  const id: number = 1;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EmployeeProxyService],

    });
  });

  it('should be created', () => {
    const service = TestBed.inject(EmployeeProxyService);
    expect(service).toBeTruthy();
  });

  it('should get employees from server', () => {
    const service = TestBed.inject(EmployeeProxyService);
    const httpMock = TestBed.inject(HttpTestingController);
    service
      .getAllEmployees$()
      .subscribe((employees: Employee[]) => expect(employees).toBe(fakeEmployees));

    const request = httpMock.expectOne('http://localhost:8080/api/v1/employees');
    expect(request.request.method).toEqual('GET');
    request.flush(fakeEmployees);
    httpMock.verify();
  });

  it('should create employees from server', () => {
    const service = TestBed.inject(EmployeeProxyService);
    const httpMock = TestBed.inject(HttpTestingController);
    service
      .createEmployee$(fakeEmployee)
      .subscribe((res) => expect(res).toEqual(fakeEmployee));

    const request = httpMock.expectOne(`${baseURL}`);
    expect(request.request.method).toEqual('POST');
    request.flush(fakeEmployee);
    httpMock.verify();
  });

  it('should update employee from server', () => {
    const service = TestBed.inject(EmployeeProxyService);
    const httpMock = TestBed.inject(HttpTestingController);
    service
      .updateEmployee$(id, fakeEmployee)
      .subscribe((res) => expect(res).toEqual(fakeEmployee));

    const request = httpMock.expectOne(`${baseURL}/${id}`);
    expect(request.request.method).toEqual('PUT');
    request.flush(fakeEmployee);
    httpMock.verify();
  });

  it('should get employee from server', () => {
    const service = TestBed.inject(EmployeeProxyService);
    const httpMock = TestBed.inject(HttpTestingController);
    service
      .getEmployeeById$(id)
      .subscribe((employee: Employee) => expect(employee).toBe(fakeEmployee));

    const request = httpMock.expectOne(`${baseURL}/${id}`);
    expect(request.request.method).toEqual('GET');
    request.flush(fakeEmployee);
    httpMock.verify();
  });

  it('should delete employee from server', () => {
    const service = TestBed.inject(EmployeeProxyService);
    const httpMock = TestBed.inject(HttpTestingController);
    service
      .deleteEmployee$(id)
      .subscribe((res) => expect(res).toBeTruthy());

    const request = httpMock.expectOne(`${baseURL}/${id}`);
    expect(request.request.method).toEqual('DELETE');
    request.flush(fakeEmployees);
    httpMock.verify();
  });

});

