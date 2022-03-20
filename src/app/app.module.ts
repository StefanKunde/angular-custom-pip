import { PortalModule } from '@angular/cdk/portal';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PipVideoComponent } from './pip-video/pip-video.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { MediaComponent } from './pages/videos/media/media.component';
import { VideosModule } from './pages/videos/videos.module';
import { YoutubeVideoWrapperComponent } from './components/media-wrappers/youtube-video-wrapper/youtube-video-wrapper.component';
import { Html5VideoWrapperComponent } from './components/media-wrappers/html5-video-wrapper/html5-video-wrapper.component';
import { Html5AudioWrapperComponent } from './components/media-wrappers/html5-audio-wrapper/html5-audio-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PipVideoComponent,
    AboutUsComponent,
    SettingsComponent,
    MediaPlayerComponent,
    MediaComponent,
    YoutubeVideoWrapperComponent,
    Html5VideoWrapperComponent,
    Html5AudioWrapperComponent
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
