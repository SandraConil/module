import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-admin-ui',
  templateUrl: './admin-ui.component.html',
  styleUrls: ['./admin-ui.component.css']
})
export class AdminUiComponent {

  @Input() myUsers : User[] | undefined;

}
