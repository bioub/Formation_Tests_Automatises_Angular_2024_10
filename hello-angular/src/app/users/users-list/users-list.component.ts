import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import { User } from '../../shared/models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {

  public users$!: Observable<User[]>;

  constructor(
    private userService: UserService,
  ) {}

  ngOnInit() {
    this.users$ = this.userService.getList$();
  }

}
