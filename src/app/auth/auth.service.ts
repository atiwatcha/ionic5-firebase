import { User } from './user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AngularFireAuth } from '@angular/fire/auth';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'http://localhost/auth_app/api';
  constructor(
    private http: HttpClient, 
    private afAuth: AngularFireAuth
  ) { }

  registerUser(user: User) {
    return new Promise<any>((resolve, reject) => {

      this.afAuth.createUserWithEmailAndPassword(user.username, user.password)
        .then(
          res => resolve(res),
          err => reject(err))
    });
  }

  loginUser(user: User){
    return new Promise<any>((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(user.username, user.password)
        .then(
          res => resolve(res),
          err => reject(err))
    })
  }

  logoutUser() {
    return new Promise((resolve, reject) => {
      if (this.afAuth.currentUser) {
        this.afAuth.signOut()
          .then(() => {
            console.log("LOG Out");
            resolve();
          }).catch((error) => {
            reject();
          });
      }
    })
  }

  userDetails() {
    return this.afAuth.user
  }

}
