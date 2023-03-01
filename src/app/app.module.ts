import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselMobileComponent } from './carousel-mobile/carousel-mobile.component';
import { CarouselWrapperComponent } from './carousel-wrapper/carousel-wrapper.component';
import { StreetGalleryComponent } from './street-gallery/street-gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    CarouselMobileComponent,
    CarouselWrapperComponent,
    StreetGalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
