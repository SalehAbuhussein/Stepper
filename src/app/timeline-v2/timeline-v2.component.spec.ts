import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineV2Component } from './timeline-v2.component';

describe('TimelineV2Component', () => {
  let component: TimelineV2Component;
  let fixture: ComponentFixture<TimelineV2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimelineV2Component]
    });
    fixture = TestBed.createComponent(TimelineV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
