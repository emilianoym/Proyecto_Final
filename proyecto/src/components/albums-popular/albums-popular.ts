import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-albums-popular',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './albums-popular.html',
  styleUrl: './albums-popular.scss',
})
export class AlbumsPopular {

  popularIds = [1, 6, 8, 12, 9, 16];
  popularAlbums: any[] = [];

  constructor(
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.popularIds.forEach(id => {
      this.http.get<any>(`http://localhost:3000/albums/${id}`)
        .subscribe(album => {
          this.popularAlbums.push(album);
        });
    });
  }

  verAlbum(id: number) {
    this.router.navigate(['/album', id]);
  }
}
