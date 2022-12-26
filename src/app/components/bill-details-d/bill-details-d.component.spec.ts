import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillDetailsDComponent } from './bill-details-d.component';

describe('BillDetailsDComponent', () => {
  let component: BillDetailsDComponent;
  let fixture: ComponentFixture<BillDetailsDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillDetailsDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillDetailsDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
