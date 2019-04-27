import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevActivityComponent } from './prev-activity.component';

describe('PrevActivityComponent', () => {
  let component: PrevActivityComponent;
  let fixture: ComponentFixture<PrevActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrevActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
