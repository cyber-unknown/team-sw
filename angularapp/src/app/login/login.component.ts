import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  public username: string = "";
  public password: string = "";

  constructor(private router: Router) {}

  ngOnInit() {}

  onSubmit() {
    // Check credentials
    if (this.username === "admin" && this.password === "admin") {
      // Redirect to the dashboard component
      this.router.navigate(['/dashboard']);
    } else {
      // Handle incorrect credentials (you can add an error message or other logic here)
      console.log("Invalid credentials");
    }
  }
}
