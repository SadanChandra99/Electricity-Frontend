import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Bill } from 'src/app/classes/bill';
import { Payment } from 'src/app/classes/payment';
import { BillService } from 'src/app/services/bill-service';
import { PaymentService } from 'src/app/services/payment-service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  amount: number = 299;
  payment: Payment = new Payment();
  paymentForm: FormGroup;
  submitted:boolean = false;
  bill: Bill = new Bill();

  @Input() billid: number;
  
  constructor(private paymentService: PaymentService, private billService: BillService,
    private router: Router, private formBuilder: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.paymentForm = this.formBuilder.group({
      accountNumber:['', [Validators.required, Validators.minLength(12), Validators.maxLength(12)]],
      cardNumber:['', [Validators.required, Validators.minLength(12), Validators.maxLength(12)]],
      cvv:['', [Validators.required, Validators.minLength(3),Validators.maxLength(3)]],
      amount:['', Validators.required]
    });

   
   
   // this.paymentForm.patchValue({amount: this.amount});
  }

  savePayment(pay: Payment){
    this.paymentService.addPayment(this.payment).subscribe( data =>{
      console.log(data);
      this.goToPaymentList();
    }, error => console.log(error));
    
  }
  goToPaymentList(){
    this.router.navigate(['/bills']);
  }

  onSubmit(pay: Payment){
    this.submitted = true
    if(this.paymentForm.invalid){
      return
    }
    console.log(this.payment);
    this.savePayment(pay);
    this.goToPaymentList();
    alert("Success")
    // this.savePayment();
  }

}
