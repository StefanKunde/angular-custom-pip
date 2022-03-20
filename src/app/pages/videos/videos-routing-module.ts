import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoComponent } from './video/video.component';
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
    component: VideoComponent
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
