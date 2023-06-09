import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'panier',
    loadChildren: () => import('./panier/panier.module').then( m => m.PanierPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'forgetpwd',
    loadChildren: () => import('./forgetpwd/forgetpwd.module').then( m => m.ForgetpwdPageModule)
  },
  {
    path: 'pwdconfirm',
    loadChildren: () => import('./pwdconfirm/pwdconfirm.module').then( m => m.PwdconfirmPageModule)
  },
  {
    path: 'detailplat',
    loadChildren: () => import('./detailplat/detailplat.module').then( m => m.DetailplatPageModule)
  },
  {
    path: 'detailresto',
    loadChildren: () => import('./detailresto/detailresto.module').then( m => m.DetailrestoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
