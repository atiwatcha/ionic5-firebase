import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WatherDispeneserPage } from './wather-dispenser.page';

const routes: Routes = [
  {
    path: '',
    component: WatherDispeneserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WatherDispeneserPageRoutingModule {}
