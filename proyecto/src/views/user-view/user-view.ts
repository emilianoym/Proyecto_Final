import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { LikeButton } from '../../components/like-button/like-button';
import { StarStatic } from '../../components/star-static/star-static';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-view',
  standalone: true,
  templateUrl: './user-view.html',
  styleUrls: ['./user-view.scss'],
  imports: [CommonModule, HttpClientModule, LikeButton, StarStatic]
})
export class UserView {

  userId: number = 0;
  reviews: any[] = [];
  posts: any[] = [];
  username: string = "";
  userPhoto: string = "assets/default-user.png"; // Default photo
  menuOpen = false;
  vista: string = 'reviews';
  selectedTab: string = "reviews";

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    const storedUser = localStorage.getItem("user");

    // Si NO hay usuario → mandarlo al login directo
    if (!storedUser) {
      this.router.navigate(['/login']);
      return;
    }

    const user = JSON.parse(storedUser);
    this.userId = user.id;
    this.username = user.username;

    // Fetch latest user data (including photo)
    this.http.get<any>(`http://localhost:3000/user/${this.userId}`).subscribe({
      next: (userData) => {
        if (userData.foto_perfil) {
          this.userPhoto = userData.foto_perfil;
        }
      },
      error: (err) => console.error("Error fetching user data", err)
    });

    // Cargar reviews
    this.http.get<any[]>(`http://localhost:3000/user/${this.userId}/reviews`)
      .subscribe(data => this.reviews = data);

    // Cargar posts
    this.http.get<any[]>(`http://localhost:3000/user/${this.userId}/posts`)
      .subscribe(data => this.posts = data);
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  cambiarFoto() {
    const newPhotoUrl = prompt("Ingresa la URL de tu nueva foto de perfil:");
    if (newPhotoUrl) {
      this.userPhoto = newPhotoUrl;
      this.http.put(`http://localhost:3000/user/${this.userId}/photo`, { foto_perfil: newPhotoUrl })
        .subscribe({
          next: () => console.log("Foto actualizada"),
          error: (err) => console.error("Error updating photo", err)
        });
    }
  }

  cerrarSesion() {
    // 1. Borrar información del usuario
    localStorage.removeItem("user");

    // 2. Cerrar menú
    this.menuOpen = false;

    // 3. Redirigir al login
    this.router.navigate(['/login']);


  }
}
