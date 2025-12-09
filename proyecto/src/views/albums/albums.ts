import { Component } from '@angular/core';
import { AlbumsPopular } from '../../components/albums-popular/albums-popular';
import { AlbumsReview } from '../../components/albums-review/albums-review';

@Component({
  selector: 'app-albums',
  imports: [AlbumsPopular,AlbumsReview],
  templateUrl: './albums.html',
  styleUrl: './albums.scss',
})
export class Albums {

}
