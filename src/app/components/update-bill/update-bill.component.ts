import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { Bill } from 'src/app/classes/bill'; 
import { BillService } from 'src/app/services/bill-service'; 

@Component({
  selector: 'app-update-bill',
  templateUrl: './update-bill.component.html',
  styleUrls: ['./update-bill.component.css']
})
export class UpdateBillComponent implements OnInit{
  billId: number;
   bill :Bill = new Bill();

  constructor(private billService :BillService,
    private route:ActivatedRoute,
    private router : Router){

    }
  
  ngOnInit(): void {

    this.billId = this.route.snapshot.params['billId'];
    this.billService.getBillById(this.billId).subscribe(data=>{
      this.bill = data;
    },
    error=> console.log(error));
    
  }
  onSubmit(){
    this.billService.updateBill(this.billId,this.bill).subscribe(data =>{
      this.goToBillList();
    }
    ,error => console.log(error));
  }

  goToBillList(){
    this.router.navigate(['/bills-list']);
  }
  

}
