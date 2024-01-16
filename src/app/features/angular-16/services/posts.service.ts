import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable, map } from 'rxjs';

import { environment } from '../../../../environments/environment.development';
import { Posts } from './interfaces/posts.interface';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  #http = inject(HttpClient);

  getUsers(): Observable<Posts[]> {
    const { apiUrl, API_POST } = environment;
    return this.#http
      .get<Posts[]>(`${apiUrl}/${API_POST}`)
      .pipe(map((post) => post.slice(0, 5)));
  }

  getUsersSignal() {
    const { apiUrl, API_POST } = environment;
    return toSignal(
      this.#http
        .get<Posts[]>(`${apiUrl}/${API_POST}`)
        .pipe(map((post) => post.slice(0, 5))),
      {
        initialValue: [],
      }
    );
  }
}
