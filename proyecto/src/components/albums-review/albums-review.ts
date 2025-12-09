import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LikeButton } from '../like-button/like-button';
import { StarStatic } from '../star-static/star-static';


@Component({
  selector: 'app-albums-review',
  standalone: true,
  imports: [CommonModule, HttpClientModule, LikeButton, StarStatic],
  templateUrl: './albums-review.html',
  styleUrls: ['./albums-review.scss']
})
export class AlbumsReview {

  reviews: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>("http://localhost:3000/reviews")
      .subscribe({
        next: (data) => this.reviews = data,
        error: (err) => console.error("Error cargando reviews:", err)
      });
  }
  actualizarLikes(review: any, nuevosLikes: number) {
  review.likes = nuevosLikes;
  this.http.put("http://localhost:3000/reviews/" + review.id + "/likes", {
    likes: nuevosLikes
  }).subscribe({
    next: () => console.log("Likes actualizados"),
    error: err => console.error("Error al actualizar likes", err)
  });
}

}
