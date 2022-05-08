import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Employee } from "../../model/employee";
import { EmployeeStoreService } from "../../services/employee-store.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit, OnDestroy {
  sub!: Subscription;
  dataSource!: MatTableDataSource<Employee>;
  employees!: Employee[];
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'emailId', 'actions'];

  constructor(
    private serviceStore: EmployeeStoreService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.serviceStore.init();
    this.sub = this.serviceStore.get$()
      .subscribe(resp => this.dataSource = new MatTableDataSource(resp));
  }


  async onDelete(employee: Employee) {
    await this.serviceStore.delete(employee.id);
  }

  onSelect(id: number) {
    this.router.navigate(['employees/edit', id]);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
