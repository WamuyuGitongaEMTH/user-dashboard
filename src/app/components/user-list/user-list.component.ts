import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  filteredUsers: any[] = [];
  searchQuery: string = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.users$.subscribe((data) => {
      this.users = data;
      this.filteredUsers = data;
    });

    this.userService.loadUsers();
  }

  search(): void {
    const query = this.searchQuery.toLowerCase().trim();
    this.filteredUsers = this.users.filter(
      (user) =>
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query)
    );
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id);
    this.search(); // refresh filtered list
  }
}
