import { Component, OnInit } from '@angular/core';
import { AngularFireDatabaseService } from './../../services/angular-fire-database.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { WatherDispenser } from 'src/app/models/wather-dispenser';
import { async } from 'rxjs/internal/scheduler/async';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-create-wather-dispenser',
  templateUrl: './create-wather-dispenser.page.html',
  styleUrls: ['./create-wather-dispenser.page.scss'],
})
export class CreateWatherDispenserPage implements OnInit {
  sub: any;
  id: string;
  location: string;
  installDate: string;
  item: any = {
    location: '',
    installDate: ''
  };
  items: Array<any>;
  public WatherDispenser: Observable<WatherDispenser>;

  //bookingForm: FormGroup;
  //location = new FormControl('', Validators.required);
  //installDate = new FormControl('', Validators.required);
  bookingForm = new FormGroup({
    location: new FormControl('', Validators.required),
    installDate: new FormControl('', Validators.required),
  });

  constructor(
    private modalCtrl: ModalController,
    public navParams: NavParams,
    private Service: AngularFireDatabaseService,
    private router: Router,
    private route: ActivatedRoute,
    public fb: FormBuilder
  ) {
    //this.initialForm(this.item);
  }

  async ngOnInit() {
    this.sub = await this.route.params.subscribe(params => {
      //this.id = params['Customer'];
      if (params['id'] != undefined) {
        //console.log(params['id']);
        this.id = params['id'] + "dfsdfsdf";
        let location = params['location'];
        let installDate = params['installDate'];

        this.item = {
          location: location,
          installDate: installDate
        }
        this.initialForm(this.item);
      }
    });
    if (this.navParams.get("id") != undefined) {
      this.id = this.navParams.get("id");
    }
    if (this.navParams.get("location") != undefined) {
      this.location = this.navParams.get("location");
    }
    if (this.navParams.get("installDate") != undefined) {
      this.installDate = this.navParams.get("installDate");
    }
    this.item = {
      location: this.location,
      installDate: this.installDate
    }
    this.initialForm(this.item);

    /*
        if(this.id != null){
           let WatherDispenser;
          this.Service.getWatherDispenser(this.id).get().toPromise().then(function (doc) {
            if (doc.exists) {
              console.log("Document data:", doc.data().location);
              WatherDispenser = doc.data();
            } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
            }
          }).catch(function (error) {
            console.log("Error getting document:", error);
          });
          this.WatherDispenser = WatherDispenser;
          console.log(this.WatherDispenser);
    
          this.WatherDispenser = this.Service.getWatherDispenser(this.id).valueChanges();
          //{{ (WatherDispenser | async)?.location }}
          
        }
    
    */
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.sub.unsubscribe();
  }

  private initialForm(item) {
    this.bookingForm = this.fb.group({
      location: [item.location],
      installDate: [item.installDate]
    })
  }


  formSubmit() {
    if (!this.bookingForm.valid) {
      return false;
    } else {
      this.Service.updateWatherDispenserList(this.bookingForm.value, this.id);
        this.bookingForm.reset();
        //this.router.navigate(['detail-wather-dispenser']);
        this.modalCtrl.dismiss('', 'save');


    }

  }

  dismissModal() {
    this.modalCtrl.dismiss('', 'close');
  }

}
