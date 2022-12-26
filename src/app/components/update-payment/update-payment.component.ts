import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Payment } from 'src/app/classes/payment'; 
import { PaymentService } from 'src/app/services/payment-service'; 

@Component({
  selector: 'app-update-payment',
  templateUrl: './update-payment.component.html',
  styleUrls: ['./update-payment.component.css']
})
export class UpdatePaymentComponent implements OnInit{
   paymentId: number;
    payment:Payment = new Payment();

  constructor( private paymentService : PaymentService,
    private route: ActivatedRoute,
    private router : Router){

  }
  ngOnInit(): void {
    this.paymentId=this.route.snapshot.params['paymentId'];
    this.paymentService.getPaymentById(this.paymentId).subscribe(data =>{
      this.payment=data;
    },error => console.log(error));
  }
 
// updatePayment(){
//   this.paymentService.updatePayment(this.paymentId,this.payment)
//   .subscribe(data=>{
//     console.log(data)
//     this.payment= new Payment();
//     this.goToPaymentList();

//   }, error =>console.log(error));
// }
  onSubmit(){
    this.paymentService.updatePayment(this.paymentId,this.payment).subscribe(data =>{
      this.goToPaymentList();
    }
    ,error => console.log(error));
  }

  goToPaymentList(){
    this.router.navigate(['/payments']);
  }

  cancel(){
    this.router.navigate(['payments'])
  }

}

