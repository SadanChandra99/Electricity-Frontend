import { Component ,OnInit} from '@angular/core';
import { BillService } from 'src/app/services/bill-service'; 
import { Bill } from 'src/app/classes/bill'; 
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bill-details',
  templateUrl: './bill-details-d.component.html',
  styleUrls: ['./bill-details-d.component.css']
})
export class BillDetailsDComponent implements OnInit {

  billId: number
  bill:Bill
  constructor( private router: Router,
    private route : ActivatedRoute,private billService: BillService){

  }
  ngOnInit(): void {
    this.billId= this.route.snapshot.params['billId'];
    
    this.bill=new Bill();
    this.billService.getBillById(this.billId).subscribe(data=>{
      this.bill=data;
    });
  }

  home(){
this.router.navigate(['bills-list'])
  }
}
