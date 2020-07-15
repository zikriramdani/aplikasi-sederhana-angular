import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DetailItemComponent } from './detail-item/detail-item.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent },
  { 
    path: 'details/:id', 
    component: DetailItemComponent,
    data: {
      breadcumb: 'home / details'
    }
  },
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutedComponents = {
  HomeComponent,
  DetailItemComponent,
  NotFoundComponent,
};
