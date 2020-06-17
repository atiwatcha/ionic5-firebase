import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailWatherDispenserPage } from './detail-wather-dispenser.page';

const routes: Routes = [
  {
    path: '',
    component: DetailWatherDispenserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailWatherDispenserPageRoutingModule {}
