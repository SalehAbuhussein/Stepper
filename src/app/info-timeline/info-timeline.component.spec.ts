import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTimelineComponent } from './info-timeline.component';

describe('InfoTimelineComponent', () => {
  let component: InfoTimelineComponent;
  let fixture: ComponentFixture<InfoTimelineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoTimelineComponent]
    });
    fixture = TestBed.createComponent(InfoTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
