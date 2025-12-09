import { Component, AfterViewInit, OnInit } from '@angular/core';
import { LikeButton } from '../../components/like-button/like-button';
import { NewPostBtn } from '../../components/new-post/new-post';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-view',
  standalone: true,
  templateUrl: './post.html',
  imports: [NewPostBtn, LikeButton, RouterOutlet, HttpClientModule, CommonModule],
  styleUrls: ['./post.scss']
})
export class Post implements OnInit, AfterViewInit {

  posts: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>("http://localhost:3000/posts")
      .subscribe({
        next: (data) => {
          this.posts = data;
          console.log("POSTS CARGADOS:", data);
        },
        error: (err) => console.error("Error cargando posts:", err)
      });
  }

  ngAfterViewInit(): void {
    const btn = document.getElementById('floatingBtn')!;
    const footer = document.querySelector('footer')!;

    const adjustButton = () => {
      const footerTop = footer.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;

      if (footerTop < viewportHeight) {
        const overlap = viewportHeight - footerTop;
        btn.style.bottom = `${30 + overlap}px`;
      } else {
        btn.style.bottom = "30px";
      }
    };

    window.addEventListener('scroll', adjustButton);
    adjustButton();
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
