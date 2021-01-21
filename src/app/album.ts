import { Track } from './track';

export interface Album {
  album: AlbumDetails
  artist: string
}

interface AlbumDetails {
  name: string
  releaseDate: string
  coverImage: string
  tracks: Track[]
}
