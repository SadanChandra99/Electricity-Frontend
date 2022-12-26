import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Consumer } from 'src/app/classes/consumer';

@Component({
  selector: 'app-index-form',
  templateUrl: './index-form.component.html',
  styleUrls: ['./index-form.component.css']
})
export class IndexFormComponent implements OnInit {

  loginform: FormGroup;
  submitted:boolean = false;

  consumer: Consumer;
   

  constructor(private router: Router, 
    private route: ActivatedRoute, 
    private formbuilder: FormBuilder) { }

  ngOnInit(): void {

    this.loginform = this.formbuilder.group({
      email:['', [Validators.required ]],
      password:['', [Validators.required]]
    });
  }

  adminbutton(){
    this.router.navigate(['admin'])
  }

  onsubmit(){
    this.submitted = true;
    if(this.loginform.invalid){
      return
    }
    this.router.navigate(['/bills'])
  }
}
