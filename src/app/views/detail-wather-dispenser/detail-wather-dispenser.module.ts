import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailWatherDispenserPageRoutingModule } from './detail-wather-dispenser-routing.module';

import { DetailWatherDispenserPage } from './detail-wather-dispenser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DetailWatherDispenserPageRoutingModule
  ],
  declarations: [DetailWatherDispenserPage]
})
export class DetailWatherDispenserPageModule {}
