import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OrderComponent } from './components/order/order.component';
import { FeedbackformComponent } from './components/feedbackform/feedbackform.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path:'' ,component: HomeComponent,children :[
        {path:'order' ,component: OrderComponent,title:'order' },
        {path:'feedback' ,component: FeedbackformComponent,title:'feedback' },
       
    ] },
 
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  
