import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';

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
import { HeaderComponent } from './header/header.component';

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
    PrevActivityComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
