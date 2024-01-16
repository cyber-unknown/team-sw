import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { ServicesComponent } from './services/services.component';
import { HelpSupportComponent } from './help-support/help-support.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'error', component: ErrorComponent },
  { path: '', component: LoginComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'help-support', component: HelpSupportComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
