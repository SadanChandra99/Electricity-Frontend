import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BillsComponent } from './components/bills/bills.component';
import { BillsListComponent } from './components/bills-list/bills-list.component';
import { BillThumbnailComponent } from './components/bill-thumbnail/bill-thumbnail.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { IndexMenuComponent } from './components/index-menu/index-menu.component';
import { IndexFormComponent } from './components/index-form/index-form.component';
import { CreateCustomerComponent } from './components/create-customer/create-customer.component';
import { BillDetailsComponent } from './components/bill-details/bill-details.component';
import { BillService } from './services/bill-service';
import { HttpClientModule } from '@angular/common/http';
import { CarousalComponent } from './components/carousal/carousal.component';
import { ConsumerService } from './services/consumer.service';
import { BrowserAnimationsModule } 
    from '@angular/platform-browser/animations';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ConsumerListComponent } from './components/consumer-list/consumer-list.component';
import { UpdateConsumerComponent } from './components/update-consumer/update-consumer.component';
import { CreatePaymentComponent } from './components/create-payment/create-payment.component';
import { PaymentListComponent } from './components/payment-list/payment-list.component';
import { PaymentDetailsComponent } from './components/payment-details/payment-details.component';
import { UpdatePaymentComponent } from './components/update-payment/update-payment.component';
import { BillListComponent } from './components/bill-list/bill-list.component';
import { BillDetailsDComponent } from './components/bill-details-d/bill-details-d.component';

import { UpdateBillComponent } from './components/update-bill/update-bill.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { NavLogoutComponent } from './components/nav-logout/nav-logout.component';

@NgModule({
  declarations: [
    AppComponent,
    BillsComponent,
    BillsListComponent,
    BillThumbnailComponent,
    NavComponent,
    CheckoutComponent,
    FooterComponent,
    IndexMenuComponent,
    IndexFormComponent,
    CreateCustomerComponent,
    BillDetailsComponent,
    CarousalComponent,
    AboutComponent,
    ContactComponent,
    ConsumerListComponent,
    UpdateConsumerComponent,
    CreatePaymentComponent,
    PaymentListComponent,
    PaymentDetailsComponent,
    UpdatePaymentComponent,
    BillListComponent,
    BillDetailsDComponent,
    UpdateBillComponent,
    AdminDashboardComponent,
    AdminloginComponent,
    NavLogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    
    
  ],
  providers: [BillService, ConsumerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
