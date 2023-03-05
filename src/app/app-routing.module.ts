import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselWrapperComponent } from './carousel-wrapper/carousel-wrapper.component';
import { StreetGalleryComponent } from './street-gallery/street-gallery.component';
import { LandscapeGalleryComponent } from './landscape-gallery/landscape-gallery.component';
import { HumansGalleryComponent } from './humans-gallery/humans-gallery.component';

const routes: Routes = [
  { path: '', component: CarouselWrapperComponent, pathMatch: 'full'},
  { path: 'street-gallery', component: StreetGalleryComponent },
  { path: 'landscape-gallery', component:LandscapeGalleryComponent }, 
  { path: 'humans-gallery', component:HumansGalleryComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
