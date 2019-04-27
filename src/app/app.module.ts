import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainTrackerComponent } from './main-tracker/main-tracker.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { DurationComponent } from './main-tracker/duration/duration.component';
import { ClockComponent } from './main-tracker/clock/clock.component';
import { ChooseActivityComponent } from './main-tracker/choose-activity/choose-activity.component';
import { TabsComponent } from './user-info/tabs/tabs.component';
import { ActivityComponent } from './user-info/tabs/activity/activity.component';
import { ChartComponent } from './user-info/tabs/chart/chart.component';
import { PrevActivityComponent } from './main-tracker/choose-activity/prev-activity/prev-activity.component';

@NgModule({
  declarations: [
    AppComponent,
    MainTrackerComponent,
    UserInfoComponent,
    DurationComponent,
    ClockComponent,
    ChooseActivityComponent,
    TabsComponent,
    ActivityComponent,
    ChartComponent,
    PrevActivityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
