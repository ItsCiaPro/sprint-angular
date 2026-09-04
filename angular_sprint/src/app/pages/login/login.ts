import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { loginModel } from '../../../models/login.model';
import { Router } from '@angular/router';
import { Usuario } from '../../../models/usuario.model';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  usuarioLogin = {
    nome: '',
    senha: ''
  }

  isPassHidden = true;

  passHideIcon = 'img/hide_icon.svg';
  passShowIcon = 'img/show_icon.svg';
  currentPassIcon = this.passHideIcon;

  errorMessage = '';

  constructor(
    private router: Router,
    private auth: Auth) { }

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
    this.login()
  }

  async login() {

    this.auth.login(this.usuarioLogin).subscribe({
      next: (res) => {
        sessionStorage.setItem('user', JSON.stringify(res));
        this.router.navigate(['home']);
      },
      error: (err) => {
        this.errorMessage = `Falha no login: ${err}`
      }
    })
  }
}
