import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { PrevActivityComponent } from './prev-activity/prev-activity.component'


@Component({
  selector: 'app-choose-activity',
  templateUrl: './choose-activity.component.html',
  styleUrls: ['./choose-activity.component.scss']
})
export class ChooseActivityComponent implements OnInit {

  @ViewChild(PrevActivityComponent) private prevActivityComponent : PrevActivityComponent;
  @Input() allowPreviousActivity : boolean = true;

  showPreviousDialog : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showPrevious() {
    // switch flag
    this.showPreviousDialog = (this.showPreviousDialog) ? false : true;
    if(this.showPreviousDialog) {
      this.prevActivityComponent.entered();
    } else {
      this.prevActivityComponent.left();
    }
  }

  closePrevious() {
    this.prevActivityComponent.beforeClose();
    this.showPreviousDialog = false;
    this.prevActivityComponent.afterClose();
  }

}
