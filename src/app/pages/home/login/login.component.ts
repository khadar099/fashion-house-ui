import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {

  user = {
    email: '',
    password: '',
    mobile: ''
  };

  message = '';

  constructor(private api: ApiService) {}

  login() {
    this.api.login(this.user).subscribe({
      next: () => {
        this.message = 'Login successful';
      },
      error: () => {
        this.message = 'Login failed';
      }
    });
  }
}
