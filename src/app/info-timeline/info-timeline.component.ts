import {
  AfterViewChecked,
  Component,
  Inject,
  OnDestroy,
  Renderer2
} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {fromEvent, Subscription, throttleTime} from "rxjs";

@Component({
  selector: 'app-info-timeline',
  templateUrl: './info-timeline.component.html',
  styleUrls: ['./info-timeline.component.scss']
})
export class InfoTimelineComponent implements OnDestroy, AfterViewChecked {

  public window: any;
  private _windowResizeSub!: Subscription;

  constructor(@Inject(DOCUMENT) private _document: Document, private _renderer: Renderer2) {
    this.window = this._document.defaultView;
  };

  //
  // ngAfterViewInit(): void {
  //   this.updateTimeVerticalLineHeight();
  //
  //   this._resizeUnlisten = this._renderer.listen(this.window, 'resize', this.updateTimeVerticalLineHeight.bind(this));
  //
  //   setTimeout(() => {
  //     console.log('this.updateTimeVerticalLineHeight()');
  //     this.updateTimeVerticalLineHeight();
  //   }, 300)
  // }

  ngOnDestroy(): void {
    this._windowResizeSub?.unsubscribe();
  }

  // Pythagorean Theorem
  private _getPositionAtCenter(element: HTMLElement) {
    const {top, left, width, height} = element.getBoundingClientRect();
    return {
      x: left + width / 2,
      y: top + height / 2
    }
  }

  private _getDistanceBetweenElements(a: any, b: any) {
    const aPosition = this._getPositionAtCenter(a);
    const bPosition = this._getPositionAtCenter(b);

    console.log(`aPosition`, aPosition);
    console.log(`bPosition`, bPosition);

    return Math.sqrt(
      Math.pow(aPosition.x - bPosition.x, 2) +
      Math.pow(aPosition.y - bPosition.y, 2)
    );
  }

  public updateTimeVerticalLineHeight() {
    const firstListItem: any = this._document.body.querySelector('.info-timeline-container ul li:first-of-type img')!;
    const lastListItem: any = this._document.body.querySelector('.info-timeline-container ul li:last-of-type img')!;
    console.log(firstListItem);
    console.log(lastListItem)


    const line = this._document.body.querySelector('.info-timeline-container .vertical-line');
    const lineHeight = this._getDistanceBetweenElements(lastListItem, firstListItem);
    if (line) {
      this._renderer.setStyle(line, 'height', `${lineHeight}px`);
    }
  }

  ngAfterViewChecked(): void {
    this.updateTimeVerticalLineHeight();

    this._windowResizeSub = fromEvent(this.window, 'resize')
      .pipe(throttleTime(200))
      .subscribe(() => {
        this.updateTimeVerticalLineHeight();
      })
  }
}
