import { Component, VERSION } from '@angular/core';
import { name, datatype, helpers, random } from 'faker';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  selectedUser: User | null = null;
  users: User[] = [];

  constructor() {
    for (let i = 0; i < 10; i++) {
      const { name, username, email } = helpers.userCard();
      this.users.push({
        id: i,
        name,
        username,
        email,
        active: datatype.boolean(),
        group: random.arrayElement<'Admin' | 'User'>(['Admin', 'User']),
        lastLogin: datatype.datetime(),
      });
    }
  }

  changeUserActive(event: Event) {
    console.log(event);
  }
}

interface User {
  id: number;
  username: string;
  lastLogin: Date;
  group: 'User' | 'Admin';
  name: string;
  active: boolean;
  email: string;
}
