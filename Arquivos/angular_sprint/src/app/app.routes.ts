import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Invalid404 } from './pages/invalid404/invalid404';

export const routes: Routes = [

    {path: '', redirectTo:'home', pathMatch: 'full'},
    //{path: 'login', component: Login},
    {path: 'home', component: Home},

    {path: '**', component: Invalid404}

];