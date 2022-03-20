import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VideosRoutingModule } from './videos-routing-module';
import { VideosComponent } from './videos.component';

@NgModule({
  declarations: [VideosComponent],
  imports: [
    CommonModule,
    VideosRoutingModule
  ]
})
export class VideosModule { }
