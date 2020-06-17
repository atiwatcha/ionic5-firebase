import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateWatherDispenserPage } from './create-wather-dispenser.page';

const routes: Routes = [
  {
    path: '',
    component: CreateWatherDispenserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateWatherDispenserPageRoutingModule {}
