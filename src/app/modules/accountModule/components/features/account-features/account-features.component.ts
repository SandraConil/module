import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-account-features',
  templateUrl: './account-features.component.html',
  styleUrls: ['./account-features.component.css']
})
export class AccountFeaturesComponent {

  users : User[] | undefined;
  randomUser : User | undefined;
  constructor(userService : UserService){
    userService.getUsers().then((data : User[]) => {this.users = data;
    this.generateRandomUser(this.users);
    

    });
  }

  generateRandomUser(userTab : User[]){
    let random = Math.round(Math.random() * 4);
    this.randomUser = userTab[random];
  }

}
