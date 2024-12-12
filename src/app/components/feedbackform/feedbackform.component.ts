import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-feedbackform',
  standalone: true,
  imports: [],
  templateUrl: './feedbackform.component.html',
  styleUrl: './feedbackform.component.css'
})
export class FeedbackformComponent {

  
    constructor(private route: ActivatedRoute, private scrollService: ScrollService) {}

  ngOnInit(): void {
    this.route.fragment.subscribe((fragment) => {
       this.scrollService.scrollToFragment(fragment); // استدعاء الخدمة
    });
  }
   
  

}
