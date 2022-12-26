import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BillService } from 'src/app/services/bill-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Bill } from 'src/app/classes/bill';
import { ConsumerService } from 'src/app/services/consumer.service';
import { Consumer } from 'src/app/classes/consumer';

@Component({
  selector: 'app-bill-details',
  templateUrl: './bill-details.component.html',
  styleUrls: ['./bill-details.component.css']
})
export class BillDetailsComponent implements OnInit {

  customerId: number;
  customer: Consumer;
  id: number;
  billbyid: Bill;
  billDate: string;
  billdueDate: string;
  unitsConsumed: number;
  billAmount: number;
  status: string;
  
  constructor(private router: Router, private billService: BillService, private route: ActivatedRoute, private consumerService: ConsumerService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.billbyid = new Bill();
     this.billService.getbillbyid(this.id).subscribe( data => {
      this.billbyid = data
      console.log(this.billbyid);
      this.billDate = this.billbyid.billDate;
      this.billdueDate = this.billbyid.billdueDate;
      this.unitsConsumed = this.billbyid.unitsConsumed;
      this.billAmount = this.billbyid.billAmount;
      this.status = this.billbyid.status;

      this.customerId = this.route.snapshot.params['id']
    this.consumerService.getConsumerById(1).subscribe( data => {
      this.customer = data
      console.log(this.customer);
    });
      
     });
    
  }
  back(){
    this.router.navigate(['/bills'])
  }



}
