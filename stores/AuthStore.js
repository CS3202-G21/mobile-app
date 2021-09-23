import { makeObservable, observable, action, flow, runInAction } from 'mobx';
import * as SecureStore from 'expo-secure-store';

class AuthStore {
  userToken;
  isAuthenticated;
  username;
  fName;
  lName;
  email;
  password;
  constructor() {
    this.isAuthenticated = false;
    this.userToken = undefined;
    this.getToken();
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
      getToken: flow,
    });
  }

  async getToken() {
    try {
      this.userToken = await SecureStore.getItemAsync('userToken');
      runInAction(() => {
        if (this.userToken !== null) {
          this.isAuthenticated = true;
        } else {
          this.isAuthenticated = false;
        }
      });
    } catch (e) {
      runInAction(() => {
        this.isAuthenticated = false;
      });
    }
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

  async login() {
    return fetch('http://178.128.121.215:8000/api/auth/customer/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.username,
        password: this.password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        try {
          runInAction(() => {
            this.userToken = data.token;
            this.isAuthenticated = true;
          });
          SecureStore.setItemAsync('userToken', this.userToken);
          return;
        } catch (e) {
          console.log(e);
        }
      })
      .catch(function (error) {
        console.log(
          'There has been a problem with your fetch operation: ' + error.message
        );
      });
  }

  *logout() {
    this.userToken = null;
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
