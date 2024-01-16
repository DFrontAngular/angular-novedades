import { CommonModule } from '@angular/common';
import { Component, afterNextRender, inject } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-signal-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signal-example.component.html',
  styleUrl: './signal-example.component.css',
})
export class SignalExampleComponent {
  posts = inject(PostsService).getUsersSignal();
  posts$ = inject(PostsService).getUsers();

  constructor() {
    console.log('me pinto en el server tambien');
    afterNextRender(() => {
      console.log('me pinto en el cliente solo');
    });
  }
}
