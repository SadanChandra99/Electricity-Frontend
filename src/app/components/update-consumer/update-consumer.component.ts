import { Component, OnInit } from '@angular/core';
import { Consumer } from 'src/app/classes/consumer'; 
import { ActivatedRoute, Router } from '@angular/router';
import { ConsumerService } from 'src/app/services/consumer.service'; 

@Component({
  selector: 'app-update-consumer',
  templateUrl: './update-consumer.component.html',
  styleUrls: ['./update-consumer.component.css']
})
export class UpdateConsumerComponent implements OnInit {
  id:number;
  consumer:Consumer = new Consumer();
  constructor(private consumerService: ConsumerService,
    private route: ActivatedRoute,
   
    private router:Router){}

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.consumerService.getConsumerById(this.id).subscribe(data =>{
      this.consumer=data;
    },error =>console.log(error));  
  }

  cancel(){
    this.router.navigate(['/consumer-list'])
  }
  onSubmit(){
    this.consumerService.updateConsumer(this.id,this.consumer).subscribe(data =>{
      this.goToConsumers();
    },error =>console.log(error));
  }
  goToConsumers(){
    this.router.navigate(['/consumer-list']);
  }
  

}

