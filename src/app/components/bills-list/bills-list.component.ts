import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bill } from 'src/app/classes/bill';
import { BillService } from 'src/app/services/bill-service';

@Component({
  selector: 'app-bills-list',
  templateUrl: './bills-list.component.html',
  styleUrls: ['./bills-list.component.css']
})
export class BillsListComponent implements OnInit {

  

  billslist: Bill[];
  constructor( private billService: BillService, private router: Router) {
     
   }

   ngOnInit(): void {
    this.getbills();
  }

   getbills(){
    this.billService.getbillslist().subscribe( data => {
      this.billslist = data
    });
  }


  //  billsfiltered: any = [];   
  //  private _filterbills = '';

  //  get filterbills(){
  //   return this._filterbills;
  // }

  //  set filterbills(value: string){
  //   this._filterbills = value;
  //   console.log('in setter: ', value);
  //   this.billsfiltered = this.performfilter(value);
  //  }
    
    // performfilter(filterby: string) {

    //   return this.billslist.filter(b => b.billDate).includes(filterby);
    //   console.log(this.billsfiltered);
    // }

}
