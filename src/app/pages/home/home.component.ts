import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html'
})
export class HomeComponent {

  message = '';

  constructor(private api: ApiService) {
    this.api.getHome().subscribe(res => {
      this.message = res;
    });
  }
}
