import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginData = {
    email: '',
    password: ''
  };

  onSubmit() {
    if (this.loginData.email && this.loginData.password) {
      console.log('Login successful', this.loginData);
      alert('Login successful!');
    } else {
      console.log('Login failed');
      alert('Login failed. Please try again.');
    }
  }
}
