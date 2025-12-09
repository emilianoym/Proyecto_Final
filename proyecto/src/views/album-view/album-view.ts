import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StarRating } from '../../components/star-rating/star-rating';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-album-view',
  standalone: true,
  imports: [CommonModule, StarRating, FormsModule, HttpClientModule],
  templateUrl: './album-view.html',
  styleUrls: ['./album-view.scss'],
})
export class AlbumView {

  albumId!: number;
  album: any = null;
  albumRating: number = 0;
  reviewDescription: string = "";

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router   // ✔ AQUÍ va el Router
  ) {}

  ngOnInit() {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));

    this.http.get(`http://localhost:3000/albums/${this.albumId}`)
      .subscribe({
        next: (data) => this.album = data,
        error: (err) => console.error("Error cargando álbum:", err)
      });
  }

  onRatingChange(newRating: number) {
    this.albumRating = newRating;
  }

  publicarReview() {
    const usuario = JSON.parse(localStorage.getItem("user") || "{}");

    if (!usuario.id) {
      alert("Debes iniciar sesión para publicar una review.");
      return;
    }

    if (!this.reviewDescription.trim()) {
      alert("La review no puede ir vacía.");
      return;
    }

    const nuevaReview = {
      id_album: this.albumId,
      id_usuario: usuario.id,
      estrellas: this.albumRating,
      descripcion: this.reviewDescription
    };

    this.http.post("http://localhost:3000/reviews", nuevaReview)
      .subscribe({
        next: () => {
          alert("Review publicada");
          this.reviewDescription = "";
          this.albumRating = 0;
          this.router.navigate(['/albums']);
        },
        error: (err) => {
          console.error(err);
          alert("Error enviando la review.");
        }
      });
  }
}
