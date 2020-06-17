import { Component, OnInit } from '@angular/core';
import { AngularFireDatabaseService } from 'src/app/services/angular-fire-database.service';
import { WatherDispenser,CountingMoney,ChangFilter } from 'src/app/models/wather-dispenser';
//import { NavParams } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wather-dispeneser',
  templateUrl: './wather-dispenser.page.html',
  styleUrls: ['./wather-dispenser.page.scss'],
})
export class WatherDispeneserPage implements OnInit {
  private sub: any;
  public items: any[] ;
  wd:WatherDispenser;
  id:string ;

  constructor(
    private route: ActivatedRoute,
    //public navParams: NavParams,
    private service: AngularFireDatabaseService
  ) {
    
   }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      //this.id = params['Customer'];
      if(params['id'] != undefined){
        this.id = params['id'];
      }
    });
/*
    if (this.navParams.get("id") != undefined) {
      this.id = this.navParams.get("id");
    }
*/
    //this.id = "2FNUwmlcu1KK2vOgoFFl";
    //this.addWatherDispenser();
    if(this.id != null && this.id != undefined){
      this.getWatherDispenser();
    }else{
      this.getWatherDispenserList();
    }
    
  }

  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.sub.unsubscribe();
  }

  private async addWatherDispenser(){
    let dateNow =  new Date().toJSON();
    let CountingMoney:CountingMoney[] = [
      {
      date: dateNow,
      amount: 100,
      remark: "string"
      },
      {
        date: dateNow,
        amount: 200,
        remark: "string"
        }
    ];
    
    let ChangFilter:ChangFilter[] = [
      {
        date: dateNow,
        filter: true,
        filterRO: false,
        remark: "string"
      },
      {
        date: dateNow,
        filter: true,
        filterRO: false,
        remark: "string2"
      }
    ];

    
    this.wd = {
      id:null,
      userUID: this.id,
      location: "aaaaaaaaa",
      installDate: dateNow,
      CountingMoney: CountingMoney,
      ChangFilter:ChangFilter
    };

    await this.service.updateWatherDispenserList(this.wd, this.id);
  }

  private getWatherDispenserList(){
    this.service.getWatherDispenserList().subscribe(data => {
      this.items = data.map(e => {
        return {
          id: e.payload.doc.id,

          userUID: e.payload.doc.data()['userUID'],
          location: e.payload.doc.data()['location'],
          installDate: e.payload.doc.data()['installDate'],
          CountingMoney: e.payload.doc.data()['CountingMoney'],
          ChangFilter: e.payload.doc.data()['ChangFilter'],
        };
      })
      console.log(this.items);

    });
  }

  private async getWatherDispenser(){
    let item = await this.service.getWatherDispenser(this.id).get().toPromise().then(function (doc) {
      if (doc.exists) {
        console.log("Document data:", doc.data().location);
        //this.items  = doc.data();
        return [{
            //id: doc.data().id,
  
            userUID: doc.data().userUID,
            location: doc.data().location,
            installDate: doc.data().installDate,
            CountingMoney: doc.data().CountingMoney,
            ChangFilter: doc.data().ChangFilter,
          }];
          console.log(this.items);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        return null;
      }
    }).catch(function (error) {
      console.log("Error getting document:", error);
      return null;
    });
    console.log(item);
    this.items = item;
  }
}
