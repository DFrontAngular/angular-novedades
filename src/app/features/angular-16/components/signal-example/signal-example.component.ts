import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  signal,
  untracked,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BehaviorSubject } from 'rxjs';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-signal-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signal-example.component.html',
  styleUrl: './signal-example.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalExampleComponent {
  posts = inject(PostsService).getUsersSignal();
  postCount = computed(() => this.posts().length);

  posts$ = inject(PostsService).getUsers();

  age = signal(25);
  name = signal('Jonh');

  age$ = new BehaviorSubject<number>(25);

  constructor() {
    effect(() => {
      console.log(
        `Me ejecuto cuando esta signal cambia este signal: ${this.age()}, pero este lo tengo sin seguimiento ${untracked(
          () => this.name()
        )}`
      );
    });

    this.age$.pipe(takeUntilDestroyed()).subscribe({
      next: (age) => console.log('Nuevo valor en el observable: ', age),
    });
  }

  changeName() {
    this.name.set('New name');
  }

  changeAge() {
    this.age.update((val) => 30);
    // this.age.set(30);
    this.age$.next(30);
  }
}
