import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OrderComponent } from './components/order/order.component';
import { FeedbackformComponent } from './components/feedbackform/feedbackform.component';
import { NgModule } from '@angular/core';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { LocationComponent } from './components/location/location.component';

export const routes: Routes = [
    {
        path: '', component: MainLayoutComponent, children: [
            { path: '', redirectTo: '/Home', pathMatch: 'full' },
            { path: 'Home', component: HomeComponent, title: 'Home Page' },
            { path: 'order', component: OrderComponent },
            { path: 'feedback', component: FeedbackformComponent },
            { path: 'location', component: LocationComponent }
        ]
    }




];

@NgModule({
    imports: [],exports: [RouterModule]
})
export class AppRoutingModule { }

