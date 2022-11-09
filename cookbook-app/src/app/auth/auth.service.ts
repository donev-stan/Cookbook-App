import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signup({ email, password }) {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyDDb4Q05Uu036F7kV2n6lGNwfv04mY7qNc`;

    return this.http.post<AuthResponseData>(url, {
      email,
      password,
      returnSecureToken: true,
    });
  }
}
