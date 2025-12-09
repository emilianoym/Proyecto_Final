import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LikeButton } from '../like-button/like-button';

@Component({
  selector: 'app-post-popular',
  standalone: true,
  templateUrl: './post-popular.html',
  styleUrls: ['./post-popular.scss'],
  imports: [CommonModule, HttpClientModule, LikeButton]
})
export class PostPopular {

  popularIds: number[] = [19, 20, 37];

  posts: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.popularIds.forEach(id => {
      this.http.get<any>(`http://localhost:3000/posts/${id}`)
        .subscribe(post => {
          this.posts.push(post);
        });
    });
  }

  actualizarLikes(post: any, nuevosLikes: number) {
    post.likes = nuevosLikes;

    this.http.put("http://localhost:3000/posts/" + post.id + "/likes", {
      likes: nuevosLikes
    }).subscribe({
      next: () => console.log("Likes actualizados"),
      error: err => console.error("Error al actualizar likes", err)
    });
  }


}
