import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  movie;
  genres;
  image_url = environment.tmdb_image_url;
  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  async ngOnInit(): Promise<void> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${environment.tmdb_api_token}`,
      }),
      params: new HttpParams({
        fromString: 'append_to_response=credits,videos,images',
      }),
    };
    this.movie = await this.http
      .get(
        environment.tmdb_api_url + '/movie/' + this.route.snapshot.params.id,
        httpOptions
      )
      .toPromise();
  }
}
