import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-post-view',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './new-post-view.html',
  styleUrls: ['./new-post-view.scss']
})
export class NewPostView {

  nombre_cancion: string = "";
  artista: string = "";
  descripcion: string = "";
  link_cancion: string = "";

  usuario_id: number | null = null;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    const user = localStorage.getItem("user");

    if (user) {
      const userData = JSON.parse(user);
      this.usuario_id = userData.id; // ← ID real del usuario
    } else {
      alert("Debes iniciar sesión.");
      this.router.navigate(['/login']);
    }
  }

  crearPost() {

    if (!this.nombre_cancion || !this.artista || !this.descripcion || !this.link_cancion) {
      alert("Por favor llena todos los campos.");
      return;
    }

    const nuevoPost = {
      usuario_id: this.usuario_id,
      nombre_cancion: this.nombre_cancion,
      artista: this.artista,
      descripcion: this.descripcion,
      link_cancion: this.link_cancion
    };

    this.http.post("http://localhost:3000/posts", nuevoPost)
      .subscribe({
        next: () => {
          alert("Post creado");
          this.router.navigate(['/post']);
        },
        error: (err) => {
          console.error(err);
          alert("Hubo un error al crear el post.");
        }
      });

  }
}

