import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { MapComponent } from "./map/map.component";
import { GoogleMapsModule } from "@angular/google-maps";
import { AboutComponent } from "./about/about.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { AgmCoreModule } from "@agm/core";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MapComponent,
    AboutComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyD_TJFzSX3g0JY75_u4lF-JSEcThedb2k0",
      libraries: ["places"],
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
