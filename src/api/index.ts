export const API_KEY = "47617a8d3164562c51cc1c664b00fba0";
type TrackImage = {
    "#text": string;
    size: "small" | "medium" | "large" | "extralarge";
  };
  
  type Artist = {
    name: string;
    mbid: string;
    url: string;
  };
  
  type Track = {
    name: string;
    playcount: string;
    listeners: string;
    url: string;
    streamable: "0" | "1";
    artist: Artist;
    image: TrackImage[];
    "@attr": {
      rank: string;
    };
  };
  
 export type TopTracksResponse = {
    toptracks: {
      track: Track[];
    };
  };