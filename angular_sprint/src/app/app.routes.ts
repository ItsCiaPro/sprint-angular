import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Invalid404 } from './pages/invalid404/invalid404';
import { Login } from './pages/login/login';
import { RedirectIfLoggedInGuard } from './auth/core/guards/redirect-if-logged-in.guard';
import { Auth } from './auth/core/guards/auth.guard';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [

    {path: '', redirectTo:'login', pathMatch: 'full'},
    {path: 'login', component: Login, canActivate: [RedirectIfLoggedInGuard]},
    {path: 'home', component: Home, canActivate: [Auth]},
    {path: 'dashboard', component: Dashboard, canActivate: [Auth]},

    {path: '**', component: Invalid404}

];