import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent {
  users = ['Antonio', 'Manuel', 'Alejandra', 'Natalia', 'Rocio', 'Curro'];
  newUser = '';

  addUser() {
    if (this.newUser.trim()) {
      this.users.push(this.newUser.trim());
      this.newUser = '';
    }
  }

  deleteUser(index: number) {
    this.users.splice(index, 1);
  }
}
