import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuateCarInfoBoxComponent } from './valuate-car-info-box.component';

describe('ValuateCarInfoBoxComponent', () => {
  let component: ValuateCarInfoBoxComponent;
  let fixture: ComponentFixture<ValuateCarInfoBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValuateCarInfoBoxComponent]
    });
    fixture = TestBed.createComponent(ValuateCarInfoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
