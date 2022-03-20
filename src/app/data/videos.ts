export interface VideoData {
  id: number;
  embeddedHtml?: string;
  youtubeVideoId?: string;
  videoUrl?: string;
  audioUrl?: string;

}

export const videos: VideoData[] = [
  {
    id: 1,
    embeddedHtml: '<iframe width="560" height="315" src="https://www.youtube.com/embed/WE5JV6t9i2g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    youtubeVideoId: 'ec6e20BynJI'
  },
  {
    id: 2,
    audioUrl: 'https://download.samplelib.com/mp3/sample-15s.mp3'
  },
  {
    id: 3,
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
  }
]
