import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TableDataService {
  basePath: string="https://reqres.in/api/";

  constructor(private http:HttpClient) { }
  getData(): Observable<any>
  {
    const url= `${this.basePath}users?page=2`;
    return this.http.get(url);
  }
}
