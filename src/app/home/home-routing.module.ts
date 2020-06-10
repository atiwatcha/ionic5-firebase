import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
    children: [
      {
        path: 'account',
        children:[
          {
            path: '',
            loadChildren: () => import('../dashboard/dashboard.module').then(m=>m.DashboardPageModule)
          }
        ]
      },{
        path: 'calls',
        children:[
          {
            path: '',
            loadChildren: () => import('../dashboard/dashboard.module').then(m=>m.DashboardPageModule)
          }
        ]
      },{
        path: 'inbox',
        children:[
          {
            path: '',
            loadChildren: () => import('../dashboard/dashboard.module').then(m=>m.DashboardPageModule)
          }
        ]
      },{
        path: '',
        redirectTo: '/tabs/account',
        pathMatch: 'full'
      }
    ]
  },{
    path: '',
    redirectTo: '/tabs/account',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
