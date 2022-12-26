import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consumer } from '../classes/consumer'; 

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {
  private baseURL = "http://localhost:8082/api/v1/consumer";
  constructor(private httpClient: HttpClient) { }

  getConsumerList():Observable<Consumer[]> {
    return this.httpClient.get<Consumer[]>(`${this.baseURL}`);
  }

  addConsumer(consumer: Consumer): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,consumer);
  }
  getConsumerById(id: number): Observable<Consumer>{
    return this.httpClient.get<Consumer>(`${this.baseURL}/q`);

  }
  updateConsumer(id:number , consumer:Consumer):Observable<object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,consumer);
  }

  deleteConsumer(id: number): Observable<object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
