import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  popularMovies;
  nowPlayingMovies;
  genres;
  constructor(private http: HttpClient) {}

  async ngOnInit() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${environment.tmdb_api_token}`,
      }),
    };
    this.genres = await this.http
      .get(`${environment.tmdb_api_url}/genre/movie/list`, httpOptions)
      .toPromise();
    this.genres = this.genres.genres;
    this.popularMovies = await this.http
      .get(`${environment.tmdb_api_url}/movie/popular`, httpOptions)
      .toPromise();

    this.nowPlayingMovies = await this.http
      .get(`${environment.tmdb_api_url}/movie/now_playing`, httpOptions)
      .toPromise();
  }
}
