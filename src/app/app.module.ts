import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Page404Component } from './shared/page404/page404.component';
import { MarterialModule } from './shared/material/material.module';
import { EmployeeIdResolver } from './employee/resolvers/employee-id.resolver';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './shared/utils/spinner/spinner/spinner.component';
import { SpinnerInterceptor } from './shared/utils/spinner/spinner.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MarterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [EmployeeIdResolver,
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
