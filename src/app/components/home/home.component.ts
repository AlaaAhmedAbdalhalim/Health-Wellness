import { Component, HostListener, OnInit } from '@angular/core';

import { RouterModule } from '@angular/router';
import { OrderComponent } from '../order/order.component';
import { FeedbackformComponent } from '../feedbackform/feedbackform.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,FeedbackformComponent,
    OrderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    /* throw new Error('Method not implemented.'); */
  }

}