import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRegistrationService } from './user-registration.service';
import { SearchDeleteComponent } from './search-delete/search-delete.component';
import { StudentformComponent } from './studentform/studentform.component';
import { ProfessionalformComponent } from './professionalform/professionalform.component';
import { LoginRegistrationComponent } from './login-registration/login-registration.component';
import { OrganizationformComponent } from './organizationform/organizationform.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    SearchDeleteComponent,
    StudentformComponent,
    ProfessionalformComponent,
    LoginRegistrationComponent,
    OrganizationformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UserRegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
