import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RandomUserComponent } from './random-user/random-user.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    RandomUserComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    RandomUserComponent
  ]
})
export class SharedModule { }
