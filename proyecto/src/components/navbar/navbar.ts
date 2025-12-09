import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, HttpClientModule, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements OnInit {
  userPhoto: string = 'assets/user_icon.png';
  userId: number = 0;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      this.userId = user.id;
      this.fetchUserPhoto();
    }
  }

  fetchUserPhoto() {
    this.http.get<any>(`http://localhost:3000/user/${this.userId}`).subscribe({
      next: (userData) => {
        if (userData.foto_perfil) {
          this.userPhoto = userData.foto_perfil;
        }
      },
      error: (err) => console.error("Error fetching user photo", err)
    });
  }

  verAlbum(id: number) {
    this.router.navigate(['/albums']);
  }
}

