import { Component } from '@angular/core';


@Component({
  selector: 'app-carousel-mobile',
  templateUrl: './carousel-mobile.component.html',
  styleUrls: ['./carousel-mobile.component.scss']
})
export class CarouselMobileComponent {
  streetPreview() {
    var background = document.getElementById("background");
    background!.style.backgroundImage = "url(../../assets/images/union.jpg)";
  }

  landscapePreview() {
    var background = document.getElementById("background");
    background!.style.backgroundImage = "url(../../assets/images/4-4.jpg)";
  }

  humansPreview() {
    var background = document.getElementById("background");
    background!.style.backgroundImage = "url(../../assets/images/2-1.jpg)";
  }

  resetBackground() {
    var background = document.getElementById("background");
    background!.style.backgroundImage = "url(../../assets/images/4-2.jpg)";
  }

}





