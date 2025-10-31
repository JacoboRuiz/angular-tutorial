import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users = signal<string[]>(['Antonio', 'Manuela', 'Pepa']);

  addUser(name: string) {
    this.users.update((users) => [...users, name]);
  }

  removeUser(name: string) {
    this.users.update((users) => users.filter((u) => u !== name));
  }
}
