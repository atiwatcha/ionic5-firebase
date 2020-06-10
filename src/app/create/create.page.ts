import { Component, OnInit } from '@angular/core';
import { AngularFireDatabaseService } from './../services/angular-fire-database.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit{

  bookingForm: FormGroup;
  constructor(
    private aptService: AngularFireDatabaseService,
    private router: Router,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.bookingForm = this.fb.group({
      name: [''],
      email: [''],
      mobile: ['']
    })
  }

  formSubmit() {
    if (!this.bookingForm.valid) {
      return false;
    } else {
      this.aptService.createBooking(this.bookingForm.value).then(res => {
        console.log(res)
        this.bookingForm.reset();
        this.router.navigate(['/home']);
      })
        .catch(error => 
          console.log(error)
          );
    }
  }

}
