import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepperProgressComponent } from './stepper-progress/stepper-progress.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InfoTimelineComponent } from './info-timeline/info-timeline.component';
import { ValuateCarInfoBoxComponent } from './valuate-car-info-box/valuate-car-info-box.component';
import { StepComponent } from './step/step.component';
import { StepperComponent } from './stepper/stepper.component';
import { TimelineV2Component } from './timeline-v2/timeline-v2.component';

@NgModule({
  declarations: [
    AppComponent,
    StepperProgressComponent,
    InfoTimelineComponent,
    ValuateCarInfoBoxComponent,
    StepComponent,
    StepperComponent,
    TimelineV2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
