import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
// import { disableDebugTools } from '@angular/platform-browser';

enum Theme { light = "light", dark = "dark", transparent = "transparent" }

@Component({
  selector: 'app-prev-activity',
  templateUrl: './prev-activity.component.html',
  styleUrls: ['./prev-activity.component.scss']
})
export class PrevActivityComponent implements OnInit {
  activities: string[] = ['my previous activity 1', 'my previous activity 2', 'my previous large text activity 3', 'my previous activity 4', 'my previous activity 5'];
  disabled: boolean = false;

  @Input() show : boolean = false;
  @Input() closable : boolean = false;
  @Input() theme : Theme = Theme.light;
  @Input() title : string = "Sellect option";

  @Output() private needClose: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit() {
    // debug
    console.log('ChooseActivity:',
      '\n\t\tShow: ',     this.show,
      '\n\t\tClosable: ', this.closable,
      '\n\t\tTheme: ',      this.theme,
      '\n\t\tTitle: ',      this.title,
      )
  }

  setTheme() {
    let resultClasses : object;
    switch(this.theme) {
      case Theme.dark: {
        resultClasses = {
          light: false,
          dark: true,
          transparent: false
        }
        break;
      }
      case Theme.transparent: {
        resultClasses = {
          light: false,
          dark: false,
          transparent: true
        }
        break;
      }
      default: {
        resultClasses = {
          light: true,
          dark: false,
          transparent: false
        }
      }
    }
    return resultClasses;
  }

  doClose() {
    this.needClose.emit();
  }

  entered() {
    console.log("entered entered()");
  }

  left() {
    console.log("entered left()");
  }

  beforeClose() {
    console.log("entered beforeClose()");
  }

  afterClose() {
    console.log("entered afterClose()");
  }

}
