import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url: string = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  get(endpoint: string) {
    return this.http.get(this.url + '/' + endpoint);
  }
  getSemCabecalho(endpoint: string) {
    return this.http.get(this.url + '/' + endpoint);
  }

  post(endpoint: string, body: any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.url + '/' + endpoint, body, {headers});
  }

  put(endpoint: string, body: any) {
    return this.http.put(this.url + '/' + endpoint, body);
  }

  delete(endpoint: string, reqOpts?: any) {
    return this.http.delete(this.url + '/' + endpoint, reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    return this.http.patch(this.url + '/' + endpoint, body, reqOpts);
  }

}
