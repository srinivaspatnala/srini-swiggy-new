import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { VendorAccessGuard } from './vendor-access.guard';
import { VendorDetailsComponent } from './vendor-details/vendor-details.component';
import { VendorsComponent } from './vendors/vendors.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/signin', pathMatch: 'full'
  },
  {
    path: 'menu/:id',
    component: MenuListComponent
  },
  {
    path: 'hotel',
    component: NavbarComponent
  },
  {
    path: 'vendors',
    component: VendorsComponent,
    canActivate: [VendorAccessGuard]
  },
  {
    path: 'vendors/:id',
    component: VendorDetailsComponent
  },
  {
    path: 'signin',
    component: LoginComponent
  },
  {
    path: 'navbar',
    component: NavbarComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: '**',
    component: LoginComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
