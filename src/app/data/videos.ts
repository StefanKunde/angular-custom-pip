export interface VideoData {
  id: number;
  embeddedHtml: string;
  youtubeVideoId?: string;
}

export const videos: VideoData[] = [
  {
    id: 1,
    embeddedHtml: '<iframe width="560" height="315" src="https://www.youtube.com/embed/WE5JV6t9i2g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    youtubeVideoId: 'ec6e20BynJI'
  },
  {
    id: 2,
    embeddedHtml: '<iframe width="560" height="315" src="https://www.youtube.com/embed/zeT_5VvGNlM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    , youtubeVideoId: 'q9d6-_cEHNQ'
  },
  {
    id: 3,
    embeddedHtml: '<iframe width="560" height="315" src="https://www.youtube.com/embed/388e_8mu1t4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    , youtubeVideoId: 'D2R-LE8NlOE'
  }
]
