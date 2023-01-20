import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  isLoginMode: boolean = true;
  isLoading: boolean = false;
  error: string = null;

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.isLoading = true;

      let authObservable: Observable<AuthResponseData>;

      if (this.isLoginMode) {
        authObservable = this.authService.login(form.value);
      } else {
        authObservable = this.authService.signup(form.value);
      }

      authObservable.subscribe({
        next: (response) => {
          console.log(response);
          this.isLoading = false;
        },
        error: (errorMessage) => {
          this.isLoading = false;
          this.error = errorMessage;
          console.log(errorMessage);
        },
      });

      form.reset();
    }
  }
}
