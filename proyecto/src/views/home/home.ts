import { Component } from '@angular/core';
import { AlbumsPopular } from '../../components/albums-popular/albums-popular';
import { PostPopular } from '../../components/post-popular/post-popular';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AlbumsPopular, PostPopular],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
}
