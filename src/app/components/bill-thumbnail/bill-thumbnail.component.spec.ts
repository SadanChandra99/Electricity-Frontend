import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillThumbnailComponent } from './bill-thumbnail.component';

describe('BillThumbnailComponent', () => {
  let component: BillThumbnailComponent;
  let fixture: ComponentFixture<BillThumbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillThumbnailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
