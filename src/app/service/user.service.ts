import { Injectable } from '@angular/core';
import { User } from '../type/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [
    { email: 'phinguyenq12@gmail.com', password: 'admin',role: 'admin' },
    { email: 'user2@example.com', password: 'password2', role: 'user' }
  ];

  constructor() { }

  validateUser(email: string, password: string): boolean {
    return this.users.some(user => user.email === email && user.password === password && user.role === 'admin');
  }
}
