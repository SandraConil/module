import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-admin-features',
  templateUrl: './admin-features.component.html',
  styleUrls: ['./admin-features.component.css']
})
export class AdminFeaturesComponent {

  users: User[] | undefined;
  constructor(userService : UserService){
    userService.getUsers().then((data) => this.users = data);
  }

}
