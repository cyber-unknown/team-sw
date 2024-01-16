import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sign-in-with-google';
}
export class DashboardComponent {
  // Declare the property showProfile
  showProfile: boolean = true; // You can set the initial value based on your requirements

  // Rest of your component code...
}