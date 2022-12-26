import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from 'src/app/classes/payment'; 
import { PaymentService } from 'src/app/services/payment-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css']
})
export class PaymentListComponent implements OnInit{

  payments:Payment[]

  constructor(private paymentService: PaymentService,
    private router: Router, private route: ActivatedRoute){ }

  ngOnInit(): void {
    this.getPayments();
  }

  home(){
    this.router.navigate(['adminDashboard'])
  }
  private getPayments(){
    this.paymentService.getPaymentsList().subscribe(data => {
      this.payments = data;
    });
  
}

paymentDetails(paymentId : number){
  this.router.navigate(['payment-details',paymentId]);
}



updatePayment(paymentId: number){
  this.router.navigate(['update-payment',paymentId]);
}

deletePayment(paymentId: number){
  this.paymentService.deletePayment(paymentId).subscribe(data=>{
    console.log(data);
    this.getPayments();
  })
}



}
