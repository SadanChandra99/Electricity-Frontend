import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Consumer } from 'src/app/classes/consumer'; 
import { ConsumerService } from 'src/app/services/consumer.service';
//import { ConsumerService } from '../consumer.service';

@Component({
  selector: 'app-consumer-list',
  templateUrl: './consumer-list.component.html',
  styleUrls: ['./consumer-list.component.css']
})
export class ConsumerListComponent implements OnInit {
  consumers: Consumer[];
  constructor( private consumerService:ConsumerService,
    private router: Router){}

  ngOnInit(): void {
    this.getConsumer();
    
  }

  home(){
    this.router.navigate(['/adminDashboard'])
  }
  private getConsumer(){
    this.consumerService.getConsumerList().subscribe(date =>{
      this.consumers = date;
    });
  }
  updateconsumer(id:number){
    // alert("your modifing ")
    this.router.navigate(['update-consumer',id]);
  }
  deleteconsumer(id: number){

    this.consumerService.deleteConsumer(id).subscribe(data =>{
      console.log(data);
      this.getConsumer();
    })
  }
  }

