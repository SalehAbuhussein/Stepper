import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperProgressComponent } from './stepper-progress.component';

describe('StepperProgressComponent', () => {
  let component: StepperProgressComponent;
  let fixture: ComponentFixture<StepperProgressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StepperProgressComponent]
    });
    fixture = TestBed.createComponent(StepperProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
