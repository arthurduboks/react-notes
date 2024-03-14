import { FirebaseApp } from "utils/firebase";
import {
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

export class AuthAPI {
  static async signin(email, password) {
    const res = await signInWithEmailAndPassword(
      FirebaseApp.auth,
      email,
      password
    );
    return res.user.toJSON();
  }

  static async signup(email, password) {
    const res = await createUserWithEmailAndPassword(
      FirebaseApp.auth,
      email,
      password
    );
    return res.user.toJSON();
  }
  static async signout() {
    signOut(FirebaseApp.auth);
  }
}
