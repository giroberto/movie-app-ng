import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent implements OnInit {
  @Input() movie: any;
  @Input() genres: any;
  constructor() {}

  ngOnInit(): void {}

  getGenre(item) {
    return this.genres.filter((x) => item === x.id)[0];
  }
}
