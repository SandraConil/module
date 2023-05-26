import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users : User[] | undefined;

  constructor() { 
    
 
  }

  getUsers(){
    return fetch('../../assets/users.json').then(response => response.json());
  }
}
