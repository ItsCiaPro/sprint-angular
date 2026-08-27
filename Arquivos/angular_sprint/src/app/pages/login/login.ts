import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  isPassHidden = true;

  passHideIcon = 'img/hide_icon.svg';
  passShowIcon = 'img/show_icon.svg';
  currentPassIcon = this.passHideIcon;


  AlternatePassVisibility() {
    // Mostra a senha
    if (this.isPassHidden) {
      this.isPassHidden = false;
      this.currentPassIcon = this.passShowIcon
    }

    // Esconde a senha
    else {
      this.isPassHidden = true;
      this.currentPassIcon = this.passHideIcon;
    }
  }

}
