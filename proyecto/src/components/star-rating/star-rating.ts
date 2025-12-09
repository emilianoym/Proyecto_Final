import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './star-rating.html',
  styleUrl: './star-rating.scss'
})
export class StarRating {

  @Input() rating = 0;
  @Output() ratingChange = new EventEmitter<number>();

  hoverIndex = 0;

  setRating(value: number) {
    this.rating = value;
    this.ratingChange.emit(this.rating);
  }

  setHover(value: number) {
    this.hoverIndex = value;
  }

  resetHover() {
    this.hoverIndex = 0;
  }
}
