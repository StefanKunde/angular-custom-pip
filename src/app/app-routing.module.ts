import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HomeComponent } from './pages/home/home.component';
import { VideosComponent } from './pages/videos/videos.component';
import { SettingsComponent } from './pages/settings/settings.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'media',
    loadChildren: () => import('./pages/videos/videos.module').then(m => m.VideosModule)
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
