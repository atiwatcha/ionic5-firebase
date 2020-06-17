import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'accounts',
    loadChildren: () => import('./accounts/accounts.module').then( m => m.AccountsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'create-wather-dispenser',
    loadChildren: () => import('./views/create-wather-dispenser/create-wather-dispenser.module').then( m => m.CreateWatherDispenserPageModule)
  },
  {
    path: 'detail-wather-dispenser',
    loadChildren: () => import('./views/detail-wather-dispenser/detail-wather-dispenser.module').then( m => m.DetailWatherDispenserPageModule)
  },
  {
    path: 'wather-dispenser',
    loadChildren: () => import('./views/wather-dispeneser/wather-dispenser.module').then( m => m.WatherDispeneserPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
