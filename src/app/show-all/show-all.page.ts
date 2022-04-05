import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.page.html',
  styleUrls: ['./show-all.page.scss'],
})
export class ShowAllPage  {

  public toggled: boolean = false;

  constructor() {this.toggled = false;}

  public toggle(): void {
    this.toggled = !this.toggled;
  }

  cancelSearch($event){
    this.toggle();
  }

  onChange($event) {
    console.log($event);
  }

}
