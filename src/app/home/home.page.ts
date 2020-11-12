import { Component } from '@angular/core';
import { CommonService } from '../common.service';
import { Item } from '../itemType';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title = 'Resist';
  items: Item []=[
    ];
  name: string;
  idCount: number;

  constructor(private commonService: CommonService) {}

  addItem(){
    this.items.push({
      id: this.commonService.getIdCount(),
      name: this.name,
      branch: 0,
    });
    localStorage.items = JSON.stringify(this.items);
    this.name="";
  }
  refresh(){
    localStorage.items = [];
    this.items = [];
    localStorage.idCount = 0;
    console.log("Refreshed!!")
  }

  ionViewWillEnter(){
    if ('items' in localStorage){
      this.items = JSON.parse(localStorage.items);
    }
  }
}
