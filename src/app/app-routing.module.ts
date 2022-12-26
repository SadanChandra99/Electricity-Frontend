import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { BillDetailsDComponent } from './components/bill-details-d/bill-details-d.component';
import { BillDetailsComponent } from './components/bill-details/bill-details.component';
import { BillListComponent } from './components/bill-list/bill-list.component';
import { BillsListComponent } from './components/bills-list/bills-list.component';
import { CarousalComponent } from './components/carousal/carousal.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ConsumerListComponent } from './components/consumer-list/consumer-list.component';
import { ContactComponent } from './components/contact/contact.component';
import { CreateCustomerComponent } from './components/create-customer/create-customer.component';
import { CreatePaymentComponent } from './components/create-payment/create-payment.component';
import { IndexFormComponent } from './components/index-form/index-form.component';
import { NavLogoutComponent } from './components/nav-logout/nav-logout.component';
import { NavComponent } from './components/nav/nav.component';
import { PaymentDetailsComponent } from './components/payment-details/payment-details.component';
import { PaymentListComponent } from './components/payment-list/payment-list.component';
import { UpdateBillComponent } from './components/update-bill/update-bill.component';
import { UpdateConsumerComponent } from './components/update-consumer/update-consumer.component';
import { UpdatePaymentComponent } from './components/update-payment/update-payment.component';



const routes: Routes = [
 {path:'bills', component: BillsListComponent},
 {path:'bills/:id', component: BillDetailsComponent},
  {path:'', redirectTo: 'carousal', pathMatch: 'full'},
 {path:'payment-form', component: CheckoutComponent},
 {path:'register', component: CreateCustomerComponent},
 {path:'login', component:IndexFormComponent},
 {path: 'navlogin', component:NavComponent},
 {path:'carousal', component:CarousalComponent},
 {path:'about', component: AboutComponent},
 {path:'contact', component: ContactComponent},
 {path:'consumer-list', component: ConsumerListComponent},
 {path:'update-consumer/:id', component: UpdateConsumerComponent},

 {path:'logout',component:CarousalComponent},
 
 {path:'payments', component: PaymentListComponent},
 {path:'create-payment', component: CreatePaymentComponent},
 {path:'update-payment/:paymentId', component: UpdatePaymentComponent},
 {path: 'payment-details/:paymentId', component:PaymentDetailsComponent},

 {path:'bills-list', component:BillListComponent},
 {path:'bill-details/:billId', component: BillDetailsDComponent},
 {path:'update-bill/:billId', component: UpdateBillComponent},

 {path:'adminDashboard', component: AdminDashboardComponent},
 {path: 'admin',component: AdminloginComponent}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
