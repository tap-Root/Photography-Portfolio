import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  streetPreview() {
    var background = document.getElementById("background");
    background!.style.backgroundImage = "url(../../assets/images/8.jpg)";
  }

  landscapePreview() {
    var background = document.getElementById("background");
    background!.style.backgroundImage = "url(../../assets/images/43-3.jpg)";
  }

  humansPreview() {
    var background = document.getElementById("background");
    background!.style.backgroundImage = "url(../../assets/images/50.jpg)";
  }

  resetBackground() {
    var background = document.getElementById("background");
    background!.style.backgroundImage = "url(../../assets/images/1.jpg)";
  }
}
