import { Component, HostListener, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { ElementRef, Renderer2, ViewChild } from '@angular/core';
import { OrderComponent } from "../order/order.component";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, OrderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  images: string[] = [
    '../../../assets/burger.jpg',
    '../../../assets/hotdog.jpg',
    '../../../assets/sweets.jpg',
  ];
  currentIndex: number = 0;
  currentImage: string = this.images[0];

  constructor() {}

  ngOnInit(): void {
   /*  this.startSlideshow(); */
  }
/*
  // Method to change the current image
  change(): void {
    this.currentImage = this.images[this.currentIndex];
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  // Method to start the slideshow
  startSlideshow(): void {
    setInterval(() => this.change(), 3000); // Pass a callback function
  } */
}