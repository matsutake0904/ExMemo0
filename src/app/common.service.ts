import { Injectable } from '@angular/core';
import { Item, Child, User} from './itemType';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private idCount: number;
  getNow(){
    const date = new Date();
    return date.getFullYear() + (date.getMonth()) + date.getDate();
  }

  getChild(item: Item){

  }

  getIdCount(){
    this.idCount = localStorage.idCount;
    this.idCount ++;
    localStorage.idCount = this.idCount;
    console.log('Create ID ' + this.idCount);
    return this.idCount;
  }

  constructor() {
    if ('idCount' in localStorage ){
      this.idCount = localStorage.idCount;
    }else{
      this.idCount = 0;
    }
   }
}
