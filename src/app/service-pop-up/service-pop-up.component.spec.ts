import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePopUpComponent } from './service-pop-up.component';

describe('ServicePopUpComponent', () => {
  let component: ServicePopUpComponent;
  let fixture: ComponentFixture<ServicePopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicePopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicePopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
