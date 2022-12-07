import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  isLoginMode: boolean = true;

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form.value);

      if (this.isLoginMode) {
        // ...
      } else {
        this.authService.signup(form.value).subscribe({
          next: (response) => console.log(response),
          error: (error) => console.error(error),
        });
      }

      form.reset();
    }
  }
}
