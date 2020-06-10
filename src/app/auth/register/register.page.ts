import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage{

  constructor(
    private authService: AuthService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController
  ) { }

  form = new FormGroup({
    firstname: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    lastname: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  async onSubmit(){
    const loading = await this.loadingCtrl.create({ message: 'Registering...' });
    await loading.present();
    this.authService.registerUser(this.form.value)
    .then(async res => {
      const toast = await this.toastCtrl.create({ message: 'User Created', duration: 2000, color: 'dark' });
        await toast.present();
        loading.dismiss();
        this.form.reset();
    }, async err => {
      const alert = await this.alertCtrl.create({ message: 'There is an error:'+err.message, buttons: ['OK'] });
        loading.dismiss();
        await alert.present();
    });
  }
}
