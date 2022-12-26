import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private router : Router,
    private activatedrout :ActivatedRoute) { }

  ngOnInit(): void {
  }

  consumer(){
    this.router.navigate(['/consumer-list'])

  }

  home(){
    this.router.navigate(['/adminDashboard'])

  }

  bill(){
    this.router.navigate(['/bills-list'])
  }

  payment(){
    this.router.navigate(['/payments'])
  }

}
