import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, AlertController } from '@ionic/angular';
import { Router, Params } from '@angular/router';
import { AngularFireDatabaseService } from '../../services/angular-fire-database.service';
import { CreateWatherDispenserPage } from '../create-wather-dispenser/create-wather-dispenser.page';
import { WatherDispeneserPage } from '../wather-dispeneser/wather-dispenser.page';

import { WatherDispenser } from 'src/app/models/wather-dispenser';

@Component({
  selector: 'app-detail-wather-dispenser',
  templateUrl: './detail-wather-dispenser.page.html',
  styleUrls: ['./detail-wather-dispenser.page.scss'],
})
export class DetailWatherDispenserPage implements OnInit {

  items: WatherDispenser[];

  constructor(
    private navCtrl: NavController,
    private service: AngularFireDatabaseService,
    private router: Router,
    private modalCtrl: ModalController,
    private alertCrtl: AlertController
  ) { }

  ngOnInit() {

    this.service.getWatherDispenserList().subscribe(data => 
      {
      this.items = data.map(e => {
        return {
          id: e.payload.doc.id,

          userUID: e.payload.doc.data()['userUID'],
          location: e.payload.doc.data()['location'],
          installDate: e.payload.doc.data()['installDate'],
        } as WatherDispenser
      })
      console.log(this.items);

    });
  }

  viewDetails1(item) {
    //console.log(item);
    //console.log(item.id);
    this.router.navigate(['create-wather-dispenser', 
    { 
      id: item.id,
      location: item.location,
      installDate:item.installDate  
    }]);
  }

  
  deleteDetails(item){
    this.service.deleteWatherDispenserList(item.id);
  }

  async createDetails(){
    //this.router.navigate(['create-wather-dispenser']);
    let modal = await this.modalCtrl.create({
      component: CreateWatherDispenserPage,//CreateWatherDispenserComponent,//CreateWatherDispenserPage,
      
    });
    await modal.present();
  }

  async viewDetails(item) {
    
    let modal = await this.modalCtrl.create({
      component: WatherDispeneserPage,//CreateWatherDispenserComponent,//CreateWatherDispenserPage,
      componentProps: { 
        id: item.id
      }
    });
    await modal.present();

/*
let id = null;
if(item != null){
  id = item.id;
}
    this.router.navigate(['wather-dispenser',{id: id}]);
    */
  }

  async editDetails(item){
    let modal;
    if(item != null){
      modal = await this.modalCtrl.create({
        component: CreateWatherDispenserPage,//CreateWatherDispenserComponent,//CreateWatherDispenserPage,
        componentProps: { 
          id: item.id,
          location: item.location,
          installDate:item.installDate  
        }
      });
    }else{
      modal = await this.modalCtrl.create({
        component: CreateWatherDispenserPage,//CreateWatherDispenserComponent,//CreateWatherDispenserPage,
        
      });
    }
    
    
  

    await modal.present();

    const {data: newBalance, role } = await modal.onWillDismiss();
    if(role === "save"){
      const alert = await this.alertCrtl.create({
        header: 'Success', 
        message: "บันทึกข้อมูลสำเร็จ",
        buttons: ['Close']
      });
      await alert.present();
    }
    
  }
}
