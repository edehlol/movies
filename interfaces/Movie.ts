// {
//     "adult": false,
//     "backdrop_path": "/lNyLSOKMMeUPr1RsL4KcRuIXwHt.jpg",
//     "genre_ids": [
//         878,
//         28
//     ],
//     "id": 580489,
//     "original_language": "en",
//     "original_title": "Venom: Let There Be Carnage",
//     "overview": "After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.",
//     "popularity": 7933.523,
//     "poster_path": "/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
//     "release_date": "2021-09-30",
//     "title": "Venom: Let There Be Carnage",
//     "video": false,
//     "vote_average": 7,
//     "vote_count": 1106
// }

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  trailer: string;
  overview: string;
  vote_average: number;
  media_type: string;
}

export interface Show {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
  first_air_date: string;
  overview: string;
  vote_average: number;
  media_type: string;
}

export type Content = Movie & Show;
export interface ContentList extends Array<Content> {}
