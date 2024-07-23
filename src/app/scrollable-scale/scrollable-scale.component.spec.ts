import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollableScaleComponent } from './scrollable-scale.component';

describe('ScrollableScaleComponent', () => {
  let component: ScrollableScaleComponent;
  let fixture: ComponentFixture<ScrollableScaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollableScaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollableScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
