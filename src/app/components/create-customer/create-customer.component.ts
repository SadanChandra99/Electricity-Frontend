import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Consumer } from 'src/app/classes/consumer'; 
import { ConsumerService } from 'src/app/services/consumer.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  registerForm!:FormGroup
  submitted = false;
  
  
  consumer: Consumer = new Consumer();

  constructor(private consumerService: ConsumerService,
    private router: Router,
    private formbilder:FormBuilder) {}

    ngOnInit()  {
      this.registerForm = this.formbilder.group({
        firstName:['',[Validators.required,Validators.minLength(4)]],
        lastName:['',[Validators.required,Validators.minLength(4)]],
        mobile:['',Validators.required],
        email:['',[Validators.required,Validators.email]],
        address:['',Validators.required],
        userName:['',Validators.required],
        password:['',[Validators.required,Validators.minLength(4)]]

      })
      
    }
  saveConsumer(){
    this.consumerService.addConsumer(this.consumer).subscribe(data => {
      //console.log(data);
      this.gotoConsumerList();
    },
    error => console.log(error));
  }

  gotoConsumerList(){
    this.router.navigate(['/consumers']);
  }
  onSubmit(){
    this.saveConsumer();
    //console.log(this.consumer);
    this.router.navigate(['login']);

  }

  cancel(){
    this.router.navigate(['home']);
  }
  

}
