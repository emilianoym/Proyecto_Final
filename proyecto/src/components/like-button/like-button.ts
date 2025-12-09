import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';



@Component({
  selector: 'app-like-button',
  standalone: true,
  templateUrl: './like-button.html',
  styleUrls: ['./like-button.scss']
})
export class LikeButton implements OnInit {

  @Input() likes = 0;
  @Input() postId!: number;
  @Output() likedChange = new EventEmitter<number>();

  liked = false;

  private getStorageKey(): string {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      return `liked_posts_${user.id}`;
    }
    return 'liked_posts_guest'; // Fallback
  }

  ngOnInit() {
    const storageKey = this.getStorageKey();
    const likedPosts = JSON.parse(localStorage.getItem(storageKey) || '[]');
    if (likedPosts.includes(this.postId)) {
      this.liked = true;
    }
  }

  toggleLike() {
    const storageKey = this.getStorageKey();
    const likedPosts = JSON.parse(localStorage.getItem(storageKey) || '[]');

    if (this.liked) {
      // Unlike
      this.liked = false;
      this.likes--;

      const index = likedPosts.indexOf(this.postId);
      if (index > -1) {
        likedPosts.splice(index, 1);
      }
    } else {
      // Like
      this.liked = true;
      this.likes++;

      if (!likedPosts.includes(this.postId)) {
        likedPosts.push(this.postId);
      }
    }

    localStorage.setItem(storageKey, JSON.stringify(likedPosts));
    this.likedChange.emit(this.likes);
  }

}
