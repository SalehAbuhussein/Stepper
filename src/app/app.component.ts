import {AfterViewInit, Component, ComponentRef, ViewChild, ViewChildren} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'angular-playground';
  constructor() {

  }

  ngAfterViewInit(): void {
  }

  onClickHandler() {
    // this.appMenuComp.printTitle();
  }


}
