import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersUrl = 'assets/mock-data/users.json';

  private usersSubject = new BehaviorSubject<any[]>([]);
  users$ = this.usersSubject.asObservable();

  constructor(private http: HttpClient) {}

  loadUsers(): void {
    this.http.get<any[]>(this.usersUrl).subscribe((data) => {
      this.usersSubject.next(data);
    });
  }

  deleteUser(id: number): void {
    const updatedUsers = this.usersSubject.value.filter(
      (user) => user.id !== id
    );
    this.usersSubject.next(updatedUsers);
  }

  getUserById(id: number): any {
    return this.usersSubject.value.find((user) => user.id === id);
  }
}
