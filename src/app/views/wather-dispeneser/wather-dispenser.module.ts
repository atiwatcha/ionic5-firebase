import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WatherDispeneserPageRoutingModule } from './wather-dispenser-routing.module';

import { WatherDispeneserPage } from './wather-dispenser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WatherDispeneserPageRoutingModule
  ],
  declarations: [WatherDispeneserPage]
})
export class WatherDispeneserPageModule {}
