import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-new-post-btn',
  standalone: true,
  templateUrl: './new-post.html',
  styleUrl: './new-post.scss',
  imports: [RouterModule]
})
export class NewPostBtn {

  constructor(private router: Router) {}

  goNewPost() {
    this.router.navigate(['/new-post']);
  }
}
