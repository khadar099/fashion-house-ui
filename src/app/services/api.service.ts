import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://18.60.241.142:8181/api';

  constructor(private http: HttpClient) {}

  getHome() {
    return this.http.get(`${this.baseUrl}/home`, { responseType: 'text' });
  }

  register(data: any) {
    return this.http.post(`${this.baseUrl}/auth/register`, data);
  }

  login(data: any) {
    return this.http.post(`${this.baseUrl}/auth/login`, data);
  }
}
