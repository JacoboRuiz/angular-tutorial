import { UserService } from './../services/user.service';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users-dashboard',
  imports: [FormsModule],
  templateUrl: './users-dashboard.component.html',
  styleUrl: './users-dashboard.component.scss',
})
export class UsersDashboardComponent {
  private userService = inject(UserService);

  users = this.userService.users;
  newUser = '';

  addUser() {
    if (this.newUser.trim()) {
      this.userService.addUser(this.newUser.trim());
      this.newUser = '';
    }
  }

  removeUser(name: string) {
    this.userService.removeUser(name);
  }
}
