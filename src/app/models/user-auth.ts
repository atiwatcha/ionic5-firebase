//error displayName ตอนรับค่า current user
export class UserAuth {
    displayName:string;
    email:string;
    photoURL:string;
    emailVerified:boolean;
    uid:string;  // The user's ID, unique to the Firebase project. Do NOT use
                     // this value to authenticate with your backend server, if
                     // you have one. Use User.getToken() instead.
}
