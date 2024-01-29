import {Component} from '@angular/core';

@Component({
  selector: 'app-valuate-car-info-box',
  templateUrl: './valuate-car-info-box.component.html',
  styleUrls: ['./valuate-car-info-box.component.scss']
})
export class ValuateCarInfoBoxComponent {
  public makeImg = '';
  public makeName = 'تويوتا كامري 2022 GLE';
  public makeInfoList: string[] = [
    '10,000 كم',
    'حالة السيارة ممتاز',
    'مواصفات خليجية',
    'XV70',
    'صالون',
    '4 أبواب',
    '2.5 ليتر',
    '4 اسطوانة',
    '204 حصان'
  ];

  get makeInfoText(): string {
    return  this.makeInfoList.join(' - ')
  }
}
