import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateWatherDispenserPageRoutingModule } from './create-wather-dispenser-routing.module';

import { CreateWatherDispenserPage } from './create-wather-dispenser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CreateWatherDispenserPageRoutingModule
  ],
  declarations: [CreateWatherDispenserPage]
})
export class CreateWatherDispenserPageModule {}
