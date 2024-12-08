import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OrderComponent } from './components/order/order.component';
import { FeedbackformComponent } from './components/feedbackform/feedbackform.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path:'' ,component: HomeComponent},
        {path:'order' ,component: OrderComponent},
        {path:'feedback' ,component: FeedbackformComponent},
       
    
 
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  
