import { Routes } from '@angular/router';
import { Dashbord } from './dashbord/dashbord';
import { PageNotFound } from './page-not-found/page-not-found';
import { Loginform } from './loginform/loginform';
import { Registerform } from './registerform/registerform';
import { ChangePassword } from './change-password/change-password';
import { AuthReset } from './auth-reset/auth-reset';
import { Home } from './home/home';
import { FormExample } from './form-example/form-example';


export const routes: Routes = [
    {path: '', redirectTo:'dashboard', pathMatch: 'full'},
    {path: 'dashboard' , component:Dashbord},
    {path: 'login' , component:Loginform},
    {path: 'register' , component:Registerform},
    {path: 'changepassword' , component:ChangePassword},
    {path: 'authreset' , component:AuthReset},
    {path: 'home' , component:Home},
    {path: 'formExample' , component:FormExample},
    {path: '**' , component:PageNotFound}
];
