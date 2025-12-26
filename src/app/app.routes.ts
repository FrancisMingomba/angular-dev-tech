import { Routes } from '@angular/router';
import { Dashbord } from './dashbord/dashbord';
import { PageNotFound } from './page-not-found/page-not-found';
import { Loginform } from './loginform/loginform';
import { Registerform } from './registerform/registerform';
import { ChangePassword } from './change-password/change-password';
import { AuthReset } from './auth-reset/auth-reset';
import { Home } from './home/home';
import { UserData } from './user-data/user-data';
import { AddUser } from './add-user/add-user';
import { ShowData } from './show-data/show-data';
import { Signup } from './signup/signup';
import { Test } from './test/test';
import { Signin } from './signin/signin';
import { Logout } from './logout/logout';
import { LeftSidebar } from './left-sidebar/left-sidebar';
import { Settings } from './settings/settings';
import { Sidebar } from './sidebar/sidebar';




export const routes: Routes = [
    {path: '', redirectTo:'dashboard', pathMatch: 'full'},
    {path: 'dashboard' , component:Dashbord},
    {path: 'login' , component:Loginform},
    {path: 'register' , component:Registerform},
    {path: 'changepassword' , component:ChangePassword},
    {path: 'authreset' , component:AuthReset},
    {path: 'home' , component:Home},
    {path: 'data' , component:UserData},
    {path: 'adduser' , component:AddUser},
    {path: 'showdata' , component:ShowData},
    {path: 'signup' , component:Signup},
    {path: 'test' , component:Test},
    {path: 'signin' , component:Signin},
    {path: 'leftsidenavbar' , component:LeftSidebar},
    {path: 'settings' , component:Settings},
    {path: 'sidebar' ,
         component:Sidebar,
         children: [
            {path: 'home' , component:Test},
            {path: 'logout' , component:Logout},
            {path: '', redirectTo:'sidebar', pathMatch: 'full'}
         ]
        },
    {path: 'logout' , component:Logout},
    {path: '**' , component:PageNotFound}
];
