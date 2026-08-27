import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { loginModel } from '../../../models/login.model';

@Component({
  selector: 'app-login',
  imports: [FormsModule, JsonPipe],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  formloginModel = new loginModel('', '', false);

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

  onSubmit() {
    console.log(this.formloginModel.values())
  }

}
