import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserCardComponent } from './user-card/user-card.component';
import { ServicesComponent } from './services/services.component';
import { HelpSupportComponent } from './help-support/help-support.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [					
    AppComponent,
      LoginComponent,
      DashboardComponent,
      ErrorComponent,
      UserCardComponent,
      ServicesComponent,
      HelpSupportComponent,
      AboutUsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
