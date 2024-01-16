import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

declare function handleSignout(): void;

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  userProfile: any;
  showProfile: boolean = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.userProfile = JSON.parse(sessionStorage.getItem("loggedInUser") || "");
  }

  handleSignOut() {
    handleSignout();
    sessionStorage.removeItem("loggedInUser");
    this.router.navigate(["/login"]).then(() => {
      window.location.reload();
    });
  }

  toggleProfile() {
    this.showProfile = !this.showProfile;
  }
}
