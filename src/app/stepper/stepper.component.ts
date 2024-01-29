import {Component, OnInit, ContentChildren, QueryList, AfterViewInit, ElementRef} from "@angular/core";
import { StepComponent } from "../step/step.component";

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  host: {
    '[style.left]': '-50*step'
  }
})
export class StepperComponent implements AfterViewInit {
  @ContentChildren(StepComponent, {read: ElementRef}) children!: QueryList<StepComponent>;

  public step: number = 0;
  public transformStyle: string = 'translateX(0)';
  public stepCount: number = 0;

  constructor() {}

  ngAfterViewInit(): void {
    this.stepCount = this.children.length;
  }

  setStep(index: number) {
    this.step = index;
    this.updateTransformStyle();
  }

  nextStep(): void {
    this.step++;
    this.updateTransformStyle();
  }

  prevStep(): void {
    this.step--;
    this.updateTransformStyle();
  }

  private updateTransformStyle(): void {
    this.transformStyle = `translateX(-${this.step*(100/this.stepCount)}%)`;
  }
}
