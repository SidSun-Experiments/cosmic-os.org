import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PolicyComponent } from './policy/policy.component';
import { TeamComponent } from "./team/team.component";
import { MemberPageComponent } from "./team/member-page/member-page.component";
import { FeaturesComponent } from './features/features.component';
import { DevicesComponent } from './devices/devices.component';
import { DeviceComponent } from './devices/device/device.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeamComponent,
    MemberPageComponent,
    NotfoundComponent,
    PolicyComponent,
    FeaturesComponent,
    DevicesComponent,
    DeviceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
    // TeamModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
