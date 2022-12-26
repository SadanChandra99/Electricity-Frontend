import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Bill } from 'src/app/classes/bill';
import { Consumer } from 'src/app/classes/consumer';
import { ConsumerService } from 'src/app/services/consumer.service';
import { BillsListComponent } from '../bills-list/bills-list.component';

@Component({
  selector: 'app-bill-thumbnail',
  templateUrl: './bill-thumbnail.component.html',
  styleUrls: ['./bill-thumbnail.component.css']
})
export class BillThumbnailComponent implements OnInit {

  constructor(private consumerService: ConsumerService, 
    private route: Router,private routes:ActivatedRoute) { }
  customer: Consumer;
  customerId: number;
  

  ngOnInit(): void {
    console.log(this.bill);
    
  //  this.getcustomer();
  }

  getcustomer(){
    this.consumerService.getConsumerById(1).subscribe( data => {
      this.customer = data
    });
  }

  @Input() bill: Bill;
  @Output() eventClicked = new EventEmitter()

  

  status: boolean = false;

  


}
