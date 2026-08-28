import { inject } from "@angular/core";
import { CanActivateChildFn, Router } from "@angular/router";


export const RedirectIfLoggedInGuard: CanActivateChildFn = (route, state) => {
  // Injeta roteador diretamente na variável sem a necessidade de constructors
  const router = inject(Router);

  const isLoggedIn = sessionStorage.getItem('user') !== null;

  if (isLoggedIn) {
    router.navigate(['/home']);
    // Impede o carregamento da página de login
    return false;
  }

  // Permite que a páginad de login seja carregada
  return true;
}