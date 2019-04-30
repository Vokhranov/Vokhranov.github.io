import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainTrackerComponent } from './main-tracker/main-tracker.component';
import { UserInfoComponent } from './user-info/user-info.component';

const routes: Routes = [
  { path: '', component: MainTrackerComponent },
  { path: 'reports', component: UserInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
