import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [HeaderComponent, RouterModule],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {
  images: string[] = [
    '../../../assets/burger.jpg',
    '../../../assets/hotdog.jpg',
    '../../../assets/sweets.jpg',
  ];
  currentIndex: number = 0;
  currentImage: string = this.images[0];
  intervalId: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.preloadImages();
      this.startSlideshow();
    }
  }
  change(): void {

    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.currentImage = this.images[this.currentIndex];


  }
  preloadImages(): void {
    this.images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  } 

  startSlideshow(): void {

    this.intervalId = setInterval(() => this.change(), 3000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }



}
