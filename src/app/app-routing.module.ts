import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RentComponent } from './rent/rent.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'rent', component: RentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, RentComponent]
