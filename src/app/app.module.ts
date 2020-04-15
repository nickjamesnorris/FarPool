import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MapComponent } from './map/map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { AboutComponent } from './about/about.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateACarpoolComponent } from './create-a-carpool/create-a-carpool.component';
import { AgmCoreModule } from "@agm/core";
import { FlashMessagesModule } from 'angular2-flash-messages';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MapComponent,
    AboutComponent,
    HomepageComponent,
    CreateACarpoolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyD_TJFzSX3g0JY75_u4lF-JSEcThedb2k0",
      libraries: ["places"]
    }),
    FlashMessagesModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
