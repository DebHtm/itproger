import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieSearchResponse } from '../models/movie.models';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private apiUrl = 'https://www.omdbapi.com/';
  private apiKey = 'f8aae2f6';

  constructor(private http: HttpClient) {}

  searchMovie(title: string): Observable<MovieSearchResponse> {
    return this.http.get<MovieSearchResponse>(`${this.apiUrl}?s=${title}&apikey=${this.apiKey}`);
  }
}
