import { Component, signal } from '@angular/core';
import { MoviesService } from '../../service/movies';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Movie } from '../../models/movie.models';

@Component({
  selector: 'app-movies',
  imports: [CommonModule, FormsModule],
  templateUrl: './movies.html',
  styleUrl: './movies.css',
})
export class Movies {
  constructor(private movieService: MoviesService) {}

  searchTitle: string = '';
  movies = signal<Movie[]>([]);
  errorMassage = signal('');

  search() {
    const title = this.searchTitle.trim();
    if (!title) return;

    this.movieService.searchMovie(title).subscribe({
      next: (response) => {
        if (response.Response === 'True') {
          this.movies.set(response.Search);
          this.errorMassage.set('');
        } else {
          this.movies.set([]);
          this.errorMassage.set(response.Error || 'No result');
        }
      },
      error: () => {
        this.errorMassage.set('Error fetching movies');
        this.movies.set([]);
      },
    });
  }
}
