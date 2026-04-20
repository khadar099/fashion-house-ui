import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  user = {
    email: '',
    password: '',
    mobile: ''
  };

  message = '';

  constructor(private api: ApiService) {}

  register() {
    this.api.register(this.user).subscribe({
      next: () => {
        this.message = 'Registration successful';
      },
      error: () => {
        this.message = 'Registration failed';
      }
    });
  }
}
