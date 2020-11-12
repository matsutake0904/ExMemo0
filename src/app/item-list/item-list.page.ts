import { Component, OnInit } from '@angular/core';
import { ActionSheetController,AlertController } from '@ionic/angular';
import { CommonService } from '../common.service';
import { Item} from '../itemType';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.page.html',
  styleUrls: ['./item-list.page.scss'],
})
export class ItemListPage implements OnInit {
  items:Item[]=[];

  constructor(public actionSheetController: ActionSheetController,
    public alertController: AlertController,
    private commonService: CommonService) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    if ('items' in localStorage){
      this.items = JSON.parse(localStorage.items);
    }
  }

  async changeItem(index: number){
    const actionSheet = await this.actionSheetController.create({
      header: 'Change List',
      //Set Sheet property
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log('Deleted ' + this.items[index].name);
            this.items.splice(index, 1);
            localStorage.items = JSON.stringify(this.items);
          }
        },{
          text: 'Update',
          icon: 'create',
          handler: () => {
            this._renameItem(index);
            console.log('Updated');
          }
        },{
          text: 'Create Child',
          icon: 'create',
          handler: () => {
            this._createChild(index);
            console.log('createChild');
          }
        },{
            text: 'Close',
            icon: 'close',
            handler: ()=>{
              console.log('Canseld');
            }
        }
        
      ]
    });
    //Present the Sheet
    actionSheet.present(); 
  }

  async _renameItem(index: number){
    const prompt = await this.alertController.create({
      header: 'Update Item',
      inputs: [
        {
          name: 'item1',
          placeholder: 'New item',
          value: this.items[index].name,
        },
      ],
      buttons: [
        {
          text: 'Close',
        },
        {
          text: 'Update',
          handler: data => {
            this.items[index] = {
              id: 0,
              name: data.item1,
              branch: 0,
            };
            localStorage.items = JSON.stringify(this.items);
          }
        }
      ]
    });
        //Present the Sheet
    prompt.present();
  }
  async _createChild(index: number){
    const prompt = await this.alertController.create({
      header: 'Create Child Item',
      inputs: [
        {
          name: 'item1',
          placeholder: 'Child item',
          value: this.items[index].name,
        },
      ],
      buttons: [
        {
          text: 'Close',
        },
        {
          text: 'Create',
          handler: data => {
            this.items[Object.keys(this.items).length] = {
              id: this.commonService.getIdCount(),
              name: data.item1,
              branch: this.items[index].id,
            }
            console.log("Create "+data.item1, this.items[Object.keys(this.items).length-1]);
            localStorage.items = JSON.stringify(this.items);
          }
        }
      ]
    });
        //Present the Sheet
    prompt.present();
  }

}
