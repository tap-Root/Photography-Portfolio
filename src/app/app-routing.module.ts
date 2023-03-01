import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselMobileComponent } from './carousel-mobile/carousel-mobile.component';
import { CarouselWrapperComponent } from './carousel-wrapper/carousel-wrapper.component';
import { StreetGalleryComponent } from './street-gallery/street-gallery.component';

const routes: Routes = [
  { path: 'street-gallery', component: StreetGalleryComponent },
  { path: 'carousel', component: CarouselComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
