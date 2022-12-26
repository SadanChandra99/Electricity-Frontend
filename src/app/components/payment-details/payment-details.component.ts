import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Payment } from 'src/app/classes/payment'; 
import { PaymentService } from 'src/app/services/payment-service'; 

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit{
  paymentId: number
  payment:Payment
constructor(private router: Router, private route : ActivatedRoute,
  private paymentService : PaymentService){

}

  ngOnInit(): void {
    this.paymentId= this.route.snapshot.params['paymentId'];
    
    this.payment=new Payment();
    this.paymentService.getPaymentById(this.paymentId).subscribe(data=>{
      this.payment=data;
    });
  }

  home(){
    this.router.navigate(['/payments'])
  }
}
