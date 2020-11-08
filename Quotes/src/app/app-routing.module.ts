import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export class Quote {
  public thumbsup: number;
  public thumbsdown: number;
  constructor(public name: string, public title: string, public quote: string, public author: string, public date: Date) {
      this.thumbsup = 0;
      this.thumbsdown = 0;
  }
}