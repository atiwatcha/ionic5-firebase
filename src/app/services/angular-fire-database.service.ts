import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Appointment } from './Appointment';

@Injectable({
  providedIn: 'root'
})
export class AngularFireDatabaseService {

  bookingListRef: AngularFireList<any>;
  bookingRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  // Create
  createBooking(apt: Appointment) {
    console.log(apt);
    /*
    return this.bookingListRef.push({
      name: apt.name,
      email: apt.email,
      mobile: apt.mobile
    });
    */
    this.bookingListRef = this.db.list('/appointment');
    return this.bookingListRef.push({
      name: apt.name,
      email: apt.email,
      mobile: apt.mobile
    });
  }

  // Get Single
  getBooking(id: string) {
    this.bookingRef = this.db.object('/appointment/' + id);
    return this.bookingRef;
  }

  // Get List
  getBookingList() {
    this.bookingListRef = this.db.list('/appointment');
    return this.bookingListRef;
  }

  // Update
  updateBooking(id, apt: Appointment) {
    /*
    return this.bookingRef.update({
      name: apt.name,
      email: apt.email,
      mobile: apt.mobile
    })
    */
    return this.bookingListRef.set(id, {
      name: apt.name,
      email: apt.email,
      mobile: apt.mobile
    });
  }

  // Delete
  deleteBooking(id: string) {
    this.bookingRef = this.db.object('/appointment/' + id);
    this.bookingRef.remove();
  }
}
