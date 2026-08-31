import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navheader',
  imports: [],
  templateUrl: './navheader.html',
  styleUrl: './navheader.css',
})
export class Navheader {

  isMenuOpen = false;
  isProfileOpen = false;

  rawUserData = sessionStorage.getItem('user');
  userEmail = this.rawUserData ? JSON.parse(this.rawUserData).email : null;

  constructor(public router: Router) {
  }

  ChangePage(path: string) {
    if (path === "#" || path === "") {
      return this.CloseMenu();
    }

    this.router.navigate([path]);
  }

  OpenProfileMenu() {
    this.isProfileOpen = true;
  }

  CloseProfileMenu() {
    this.isProfileOpen = false;
  }

  CloseMenu() {
    this.isMenuOpen = false;
  }

  OpenMenu() {
    this.CloseProfileMenu();
    this.isMenuOpen = true;
  }

  OnLogout() {
    sessionStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
