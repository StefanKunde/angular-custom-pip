import { PortalModule } from '@angular/cdk/portal';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { VideosComponent } from './pages/videos/videos.component';
import { PipVideoComponent } from './pip-video/pip-video.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { IframeComponent } from './components/iframe/iframe.component';
import { VideoComponent } from './pages/videos/video/video.component';
import { VideosModule } from './pages/videos/videos.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PipVideoComponent,
    AboutUsComponent,
    SettingsComponent,
    IframeComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PortalModule,
    VideosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
