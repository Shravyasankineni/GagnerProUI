import { OrganizationformComponent } from './organizationform/organizationform.component';
import { LoginRegistrationComponent } from './login-registration/login-registration.component';
import { ProfessionalformComponent } from './professionalform/professionalform.component';
import { StudentformComponent } from './studentform/studentform.component';
import { SearchDeleteComponent } from './search-delete/search-delete.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { Professional } from './professionalform/Professional';


const routes: Routes = [
  {path: ' ', redirectTo: 'register', pathMatch: 'full'},
  {path: 'register', component: RegistrationComponent},
  {path: 'search', component: SearchDeleteComponent},
  {path: 'studentregister', component: StudentformComponent},
  {path: 'professionalregister', component: ProfessionalformComponent},
  {path: 'organizationregister', component: OrganizationformComponent},
  {path: 'loginregister', component: LoginRegistrationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
