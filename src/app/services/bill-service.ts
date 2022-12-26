import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Bill } from "../classes/bill";

@Injectable({
  providedIn: 'root'
})
export class BillService {

  private baseURL = "http://localhost:8081/api/v1/bill";
  constructor(private httpClient: HttpClient){ }


  getBillsList(): Observable<Bill[]>{
    return this.httpClient.get<Bill[]>(`${this.baseURL}`);
  }

  getBillById(billId:number):Observable<Bill>{
    return this.httpClient.get<Bill>(`${this.baseURL}/${billId}`);
  }

  updateBill(billId: number, bill: Bill): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${billId}`, bill);
  }
  deleteBill(billId:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${billId}`);
 }



  getbillslist(): Observable<Bill[]>{
    return this.httpClient.get<Bill[]>(`${this.baseURL}`);
  }

  getbillbyid(id: number): Observable<Bill> {
    return this.httpClient.get<Bill>(`${this.baseURL}/${id}`);
  }

    //  getBills(){
    //      return BILLS;
    //  }
    //  getBill(id:number){
    //    return BILLS.find(e => e.billId === id)
    //  }

}

/*const BILLS = [

    {
      billId: 1,
      customerName: "sadan chandra",
      customerId: 756,
      mobileNumber: 7569403300,
      emailId: "sadanchandra@gmail.com",
      billDate: "06-12-2022",
      billDueDate: "31-12-2022",
      unitsConsumed: 100,
      billAmount: 799,
      billStatus: "Not paid"
  
    },

    
    {
      billId: 2,
      customerName: "srinivas ",
      customerId: 914,
      mobileNumber: 9441454150,
      emailId: "srinivas@gmail.com",
      billDate: "01-01-2022",
      billDueDate: "31-01-2022",
      unitsConsumed: 50,
      billAmount: 499,
      billStatus: "paid"
  
    },
    {
      billId: 3,
      customerName: "saritha",
      customerId: 949,
      mobileNumber: 9492049280,
      emailId: "saritha@gmail.com",
      billDate: "01-05-1977",
      billDueDate: "31-05-2022",
      unitsConsumed: 45,
      billAmount: 349,
      billStatus: "paid"
  
    },
    {
      billId: 4,
      customerName: "vaagdevi",
      customerId: 754,
      mobileNumber: 7525373993,
      emailId: "vaagdevi@gmail.com",
      billDate: "08-08-2022",
      billDueDate: "31-08-2022",
      unitsConsumed: 267,
      billAmount: 1999,
      billStatus: "Not paid"
  
    }
  
] */