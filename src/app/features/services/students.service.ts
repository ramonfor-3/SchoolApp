import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private config:any
  constructor(private http: HttpClient) { 
   const headers = new HttpHeaders({'Content-Type': 'application/json'}) 
   this.config = {headers: headers}
  }

  GetAll():any{
    return this.http.get('https://localhost:7045/api/Student/')
  }
}
