import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  scrollToSection(sectionId:string):void{
    const element = document.getElementById(sectionId);
    if(element){
      element.scrollIntoView({behavior:'smooth'});
    }
  }
}
