import { inject } from "@angular/core";
import { CanActivateChildFn, Router } from "@angular/router";


export const Auth: CanActivateChildFn = (route, state) => {
  // Injeta roteador diretamente na variável sem a necessidade de constructors
  const router = inject(Router);

  const isLoggedIn = sessionStorage.getItem('user') !== null;

  if (!isLoggedIn) {
    router.navigate(['/']);
    // Impede o carregamento da página sem login
    return false;
  }

  // Permite que a página seja carregado caso logado
  return true;
}