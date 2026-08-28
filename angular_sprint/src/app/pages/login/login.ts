import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { loginModel } from '../../../models/login.model';
import { Usuario } from '../../../models/usuario.model';
import { Router } from '@angular/router';

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

  errorMessage = '';

  constructor(private router: Router) {
  }

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

  async onSubmit() {
  
    const formData = this.formloginModel.values();

    try {
      console.log('ok')
      const res = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const returnData = await res.json();

      if (res.ok) {

        const usuario = {
          id: returnData.id,
          nome: returnData.nome,
          email: returnData.email
        }

        sessionStorage.setItem('user', JSON.stringify(usuario));
        
        this.router.navigate(['home']);

        // Erro (Status 400 ou 401)
      } else {
        this.errorMessage = returnData.message;
      }
    }

    catch (error) {
      // Erro de Rede ou Servidor Caído (Status 500)
      this.errorMessage = 'Falha na comunicação com o servidor!';
    }
  }

}
