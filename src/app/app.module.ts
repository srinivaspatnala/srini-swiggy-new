import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelsListComponent } from './hotels-list/hotels-list.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomecarouselComponent } from './homecarousel/homecarousel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VendorsComponent } from './vendors/vendors.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { VendorDetailsComponent } from './vendor-details/vendor-details.component';
import { VendorAccessGuard } from './vendor-access.guard';

@NgModule({
  declarations: [
    AppComponent,
    HotelsListComponent,
    MenuListComponent,
    NavbarComponent,
    HomecarouselComponent,
    VendorsComponent,
    LoginComponent,
    SignupComponent,
    VendorDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [VendorAccessGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
