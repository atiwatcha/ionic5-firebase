import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountsPageRoutingModule } from './accounts-routing.module';

import { AccountsPage } from './accounts.page';
import { DepositModalComponent } from '../deposit-modal/deposit-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AccountsPageRoutingModule
  ],
  declarations: [AccountsPage, DepositModalComponent],
  entryComponents: [DepositModalComponent]
})
export class AccountsPageModule {}
