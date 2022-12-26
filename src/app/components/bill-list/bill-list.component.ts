import { Component,OnInit } from '@angular/core';
import { Bill } from 'src/app/classes/bill'; 
import { BillService } from 'src/app/services/bill-service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.css']
})
export class BillListComponent implements OnInit {


  bills : Bill[];
constructor(private billService : BillService,
  private router: Router){}


  ngOnInit(): void {
    this.getBills();
  }

  home(){
    this.router.navigate(['/adminDashboard'])
  }
  private getBills(){
    this.billService.getBillsList().subscribe(data=>{
      this.bills = data;
    })
  }
  billDetails(billId : number){
    this.router.navigate(['bill-details',billId]);
  }
  updateBill(billId: number){
    this.router.navigate(['update-bill', billId]);
  }
  deleteBill(billId: number){
    this.billService.deleteBill(billId).subscribe(data=>{
      console.log(data);
      this.getBills();
    })



  }
}
