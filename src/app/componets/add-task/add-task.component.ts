import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Item } from '../../models/item';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  public task:string|null=null;

  public taskList:Item[];

  public constructor(private itemService:ItemService){
    this.taskList=itemService.taskList;
  }

   public addTask(){
    if (this.task!=null){
      this.itemService.addItem({
        description:this.task
      });
      console.log(this.taskList);
      this.task=null;
      
    }
  }
}
