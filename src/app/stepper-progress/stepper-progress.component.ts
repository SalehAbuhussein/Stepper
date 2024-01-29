import {Component} from '@angular/core';

@Component({
  selector: 'app-stepper-progress',
  templateUrl: './stepper-progress.component.html',
  styleUrls: ['./stepper-progress.component.scss']
})
export class StepperProgressComponent {
  public stepperList: any[];

  constructor() {
    this.stepperList = [

      {
        isActive: false,
        title: 'مراجعة الطلب'
      },
      {
        isActive: false,
        title: 'الفحص المبسط'
      },
      {
        isActive: true,
        title: 'معلومات السيارة'
      },
    ];
  }

  protected readonly Math = Math;
}
