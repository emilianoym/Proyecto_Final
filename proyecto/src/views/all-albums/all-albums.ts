import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-all-albums',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './all-albums.html',
  styleUrl: './all-albums.scss',
})
export class AllAlbums {
  albums: any[] = [];
  allAlbums: any[] = [];
  genres: any[] = [];
  mostrarFiltro = false;
  selectedGenre = 'all';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
    // álbumes
    this.http.get<any[]>("http://localhost:3000/albums")
      .subscribe(data => {
        this.albums = data;
        this.allAlbums = data; // Guardar copia original
      });

    // géneros
    this.http.get<any[]>("http://localhost:3000/genres")
      .subscribe(data => {
        this.genres = data;
      });
  }

  toggleFiltro() {
    this.mostrarFiltro = !this.mostrarFiltro;
  }

  aplicarFiltro(genre: string) {
    this.selectedGenre = genre;
    this.mostrarFiltro = false;

    if (genre === "all") {
      this.albums = this.allAlbums;
    } else {
      this.albums = this.allAlbums.filter(album => album.genero === genre);
    }
  }

  verAlbum(id: number) {
    this.router.navigate(['/album', id]);
  }
}
