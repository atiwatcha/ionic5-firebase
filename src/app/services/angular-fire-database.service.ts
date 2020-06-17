import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Appointment } from './Appointment';
import { WatherDispenser } from '../models/wather-dispenser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AngularFireDatabaseService {

  bookingListRef: AngularFireList<any>;
  bookingRef: AngularFireObject<any>;

  WatherDispenser: Observable<any[]>;
  
  constructor(
    private db: AngularFireDatabase,
    private firestore: AngularFirestore
    ) { }

  //#region Appointment
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
  //#endregion

  //#region WatherDispenser
  // Create
  createWatherDispenser(wd: WatherDispenser) {
    /*
    console.log(wd);
    wd.userUID = localStorage.getItem('userUID');

    this.bookingListRef = this.db.list('/WatherDispenser');
    return this.bookingListRef.push({
      userUID: wd.userUID,
      location: wd.location,
      installDate: wd.installDate
    });
    */

   wd.userUID = localStorage.getItem('userUID');
   return this.firestore.collection('WatherDispenser').add(wd);
  }

  getWatherDispenser(id: string): AngularFirestoreDocument<WatherDispenser>  {
    console.log(id);
    //return this.firestore.collection('WatherDispenser').doc(id).snapshotChanges();
    //return this.firestore.doc("WatherDispenser/"+id).snapshotChanges();
    return this.firestore.collection("WatherDispenser").doc(id);
    /*
    var docRef = 
    docRef.get().toPromise().then(function(doc) {
        if (doc.exists) {
            console.log("Document data:", doc.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
    */
  }

  // Get List
  getWatherDispenserList() {
    //this.WatherDispenser = this.db.list('/WatherDispenser').valueChanges(); 
    //return this.WatherDispenser;
    //return  this.db.list('/WatherDispenser').valueChanges(); 
    //return this.firestore.collection('WatherDispenser').snapshotChanges();
   let id_ = "2FNUwmlcu1KK2vOgoFFl1";
    return this.firestore.collection('WatherDispenser' , ref => 
        ref.where('userUID', '==', localStorage.getItem('userUID'))//.where('location', '==', 'aaaaaaaaa')
      ).snapshotChanges();
  }
  
  updateWatherDispenserList(wd: WatherDispenser,id: string) {
    if(id != null){
      wd.userUID = localStorage.getItem('userUID');
      if(wd.CountingMoney != null && wd.ChangFilter != null){
        return this.firestore.collection("WatherDispenser").doc(id).set({
          location: wd.location,
          installDate: wd.installDate,
          userUID:wd.userUID,
          CountingMoney:wd.CountingMoney,
          ChangFilter:wd.ChangFilter
      })
      }else{
        return this.firestore.collection("WatherDispenser").doc(id).set({
          location: wd.location,
          installDate: wd.installDate,
          userUID:wd.userUID
      })
      }
        
    }else{
      return this.createWatherDispenser(wd);
    }
    
 }

 deleteWatherDispenserList(id: string) {
  return this.firestore.collection("WatherDispenser").doc(id).delete()
}
 
  //#endregion
}
