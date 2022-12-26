import { Injectable } from "@angular/core";
import { HttpClient} from '@angular/common/http'
import { Payment } from "../classes/payment";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PaymentService {

    private baseURL= "http://localhost:8083/api/v1/payment";

    constructor(private httpClient:HttpClient) { }

    addPayment(payment: Payment): Observable<Object>{
        return this.httpClient.post(`${this.baseURL}`, payment);
      }





      getPaymentsList():Observable<Payment[]>{
        return this.httpClient.get<Payment[]>(`${this.baseURL}`);
       }
       createPayment(payment:Payment): Observable<Object>{
         return this.httpClient.post(`${this.baseURL}`,payment);
       }
     
       getPaymentById(paymentId:number): Observable<Payment>{
         return this.httpClient.get<Payment>(`${this.baseURL}/${paymentId}`);
       }
       updatePayment(paymentId: number, payment: Payment): Observable<Object>{
         return this.httpClient.put(`${this.baseURL}/${paymentId}`, payment);
       }
       deletePayment(paymentId:number):Observable<Object>{
          return this.httpClient.delete(`${this.baseURL}/${paymentId}`);
       }


}
