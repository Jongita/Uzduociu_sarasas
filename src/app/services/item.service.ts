import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  public taskList:Item[]=[];

  constructor() { 
    let s=localStorage.getItem("tasks");
    if (s!=null){
      this.taskList=JSON.parse(s);
    }
  }
   private save(){
    localStorage.setItem("tasks",JSON.stringify(this.taskList));
  }

  public addItem(item:Item){
    this.taskList.push(item);
    this.save();
  }

  public deleteItem(i:number){
   this.taskList.splice(i,1);
   this.save();
  }
}
