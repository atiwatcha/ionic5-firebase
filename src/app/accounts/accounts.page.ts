import { Component } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { DepositModalComponent } from '../deposit-modal/deposit-modal.component';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.page.html',
  styleUrls: ['./accounts.page.scss'],
})
export class AccountsPage {

  accounts = [
    {
      name: 'Hussein Muhammad',
      balance: 1000
    },
    {
      name: 'Ahmad Rashid',
      balance: 1200
    }
  ];

  constructor(private modalCtrl: ModalController, private alertCrtl: AlertController) { }

  async openModal(account) {
    const modal = await this.modalCtrl.create({
      component:DepositModalComponent,
      componentProps: {name: account.name, balance: account.balance }
    });

    await modal.present();

    const {data: newBalance, role } = await modal.onWillDismiss();
    if(role === 'deposited'){
      const index = this.accounts.findIndex(acc => acc.name === account.name);
      this.accounts[index].balance = newBalance;

      const alert = await this.alertCrtl.create({
        header: 'Success', 
        message: 'Amount has been Deposited',
        buttons: ['Close']
      });
      await alert.present();
    }
  }

}

