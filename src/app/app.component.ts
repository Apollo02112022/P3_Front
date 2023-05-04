import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'P3_Front';

  constructor(private http: HttpClient) {}    

  getData(): Observable<any> {
    const url = 'http://localhost:8080/offer-a-barter';
    const token = localStorage.getItem("token");
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}`, "Content-Type": "application/json" });
    const options = {
      headers: headers,
    };
  
    return this.http.get<any>(url, options);
  }

}
