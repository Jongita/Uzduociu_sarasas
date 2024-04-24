import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Item } from '../../models/item';
import { CommonModule } from '@angular/common';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-show-task',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './show-task.component.html',
  styleUrl: './show-task.component.css'
})
export class ShowTaskComponent {
  public taskList:Item[];
  public constructor(private itemService:ItemService){
    this.taskList=itemService.taskList;
  }
  public deleteItem(i:number){
    this.itemService.deleteItem(i);

  }
}
