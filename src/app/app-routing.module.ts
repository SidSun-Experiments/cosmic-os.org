import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {PolicyComponent} from './policy/policy.component';
import {FeaturesComponent} from "./features/features.component";
import { TeamComponent } from "./team/team.component";
import { MemberPageComponent } from "./team/member-page/member-page.component";
import { DevicesComponent } from "./devices/devices.component";
import { DeviceComponent } from "./devices/device/device.component";

const routes: Routes = [
  {
    path: 'privacy', component: PolicyComponent
  },
  {
    path: 'policy', redirectTo: 'privacy', pathMatch: 'full'
  },
  {
    path: 'team', component: TeamComponent
  },
  {
    path: 'team/:name', component: MemberPageComponent
  },
  {
    path: 'devices/:name', component: DeviceComponent
  },
  {
    path: 'devices', component: DevicesComponent
  },
  {
    path: 'privacy-policy', redirectTo: 'privacy', pathMatch: 'full'
  },
  {
    path: 'features', component: FeaturesComponent
  },
  {
    path: 'devices', redirectTo: 'get', pathMatch: 'full'
  },
  {
    path: 'download', redirectTo: 'get', pathMatch: 'full'
  },
  {
    path: '', component: HomeComponent
  },
  {
    path: 'home', redirectTo: '', pathMatch: 'full'
  },
  {
    path: '**', component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
