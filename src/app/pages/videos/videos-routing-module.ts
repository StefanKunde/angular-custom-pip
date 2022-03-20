import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MediaComponent } from './media/media.component';
import { VideosComponent } from './videos.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: VideosComponent,
    canActivate: []
  },
  {
    path: ':id',
    component: MediaComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideosRoutingModule { }
