import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-random-user',
  templateUrl: './random-user.component.html'
})
export class RandomUserComponent implements OnInit {
  user$: Observable<any> = of();

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.user$ = this.httpClient.get('https://jsonplaceholder.typicode.com/users/1')
  }
}
