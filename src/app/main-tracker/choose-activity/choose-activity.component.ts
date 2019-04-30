import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-choose-activity',
  templateUrl: './choose-activity.component.html',
  styleUrls: ['./choose-activity.component.scss']
})
export class ChooseActivityComponent implements OnInit {

  @Input() allowPreviousActivity : boolean = true;

  showPreviousDialog : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showPrevious() {
    // switch flag
    this.showPreviousDialog = (this.showPreviousDialog) ? false : true;
  }

  closePrevious() {
    this.showPreviousDialog = false;
  }

}
