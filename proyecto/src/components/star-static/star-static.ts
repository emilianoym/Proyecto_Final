import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-star-static',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './star-static.html',
  styleUrls: ['./star-static.scss']
})
export class StarStatic {

  @Input() rating: number = 0;

}
