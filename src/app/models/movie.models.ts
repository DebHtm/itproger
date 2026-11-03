export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export type MovieSearchResponse =
  | {
      Response: 'True';
      Search: Movie[];
      totalResults: string;
    }
  | {
      Response: 'False';
      Error: string;
    };
