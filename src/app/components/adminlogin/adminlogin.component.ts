import { InvokeFunctionExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  adminform: FormGroup
  submitted: boolean= false;
  email:String ="";
  password:any;
  constructor(private router: Router, private frombuilder: FormBuilder){

  }

  ngOnInit(): void {

    this.adminform = this.frombuilder.group({

      email: ['', Validators.required],
      password:['', Validators.required]

    })
  }

  onsubmit(){
    this.submitted= true;
    if(this.adminform.invalid){
      return
    }

    this.login();
  }

  login(){
    if(this.email == "admine@asd" && this.password=="12345"){
      this.router.navigateByUrl('/adminDashboard')
      console.log("welcome")
      alert("welcome");
  
    }
    else if(this.email =="" && this.password ==""){
      alert("enter proper email or password")
  
    }
  }

}
