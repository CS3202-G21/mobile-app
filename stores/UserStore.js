import { makeObservable, observable, computed, action, flow } from 'mobx';
import * as SecureStore from 'expo-secure-store';

class UserStore {
  userToken;
  isAuthenticated;
  username;
  fName;
  lName;
  email;
  password;

  constructor() {
    this.userToken = SecureStore.getItemAsync('userToken');
    this.isAuthenticated = this.userToken ? true : false;
    console.log(this.userToken);
    console.log(this.isAuthenticated);
    this.username = '';
    this.fName = '';
    this.lName = '';
    this.email = '';
    this.password = '';
    makeObservable(this, {
      isAuthenticated: observable,
      userToken: observable,
      username: observable,
      fName: observable,
      lName: observable,
      email: observable,
      password: observable,
      reset: action,
      login: flow,
      logout: flow,
    });
  }
  setUsername(username) {
    this.username = username;
  }

  setFName(fName) {
    this.fName = fName;
  }

  setLName(lName) {
    this.lName = lName;
  }

  setEmail(email) {
    this.email = email;
  }

  setPassword(password) {
    this.password = password;
  }
  reset() {
    this.username = '';
    this.fName = '';
    this.lName = '';
    this.email = '';
    this.password = '';
  }
  *login() {
    return fetch('http://localhost:8000/api/auth/customer/login').then(
      (response) => {
        console.log(response);
        const userToken = response.token;
        const username = response.user.username;
        try {
          SecureStore.setItemAsync('userToken', userToken);
          this.isAuthenticated = true;
        } catch (e) {
          console.log(e);
        }
      }
    );
  }
  *logout() {
    this.userToken = undefined;
    this.username = '';
    this.fName = '';
    this.lName = '';
    this.email = '';
    this.password = '';
    this.isAuthenticated = false;
    SecureStore.deleteItemAsync('userToken');
    console.log('hi', this.userToken);
    return Promise.resolve();
  }
}
export const authStore = new AuthStore();
