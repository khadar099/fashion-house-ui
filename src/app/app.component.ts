import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'fashion-house-ui';
  message = '';

  constructor(private api: ApiService) {
    this.api.getHome().subscribe({
      next: (res) => {
        this.message = res;
      },
      error: (err) => {
        this.message = 'API failed';
        console.error(err);
      }
    });
  }
}
