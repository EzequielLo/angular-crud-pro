import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FormComponent } from '../components/form/form.component';

@Injectable({
  providedIn: 'root'
})
export class IsSaveGuard implements CanDeactivate<FormComponent> {
  canDeactivate(
    component: FormComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    if (component.formEmployee.dirty || component.onUpdate) {
      return confirm('Save changes?');
    }
    return true;

  }

}
