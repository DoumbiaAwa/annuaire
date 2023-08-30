import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormService } from '../form.service';
import { JournallComponent } from '../journall/journall.component';
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
//j'ai déclarer un tableau qui va contenir les text et un champs de saisi
tasks: { text: string; completed: boolean; quantity: number }[] = [];
newTask: string = '';
newQuantity: number = 1;
@Input() todolist: any[] = [];
// le bouton add text pour ajouter 
constructor(private route: ActivatedRoute, private formService: FormService) { }

addTask() {
  if (this.newTask.trim() !== '') {
    this.tasks.push({ text: this.newTask, quantity: this.newQuantity, completed: false });
    this.newTask = '';
    this.formService.addTodolist( this.tasks);
  }
       }
// le bouton pour supprimer
removeTask(index: number) {
  this.tasks.splice(index, 1);
}
toggleTask(index: number) {
  this.tasks[index].completed = !this.tasks[index].completed;
  console.log( this.tasks[index].completed )
}
  selectedDay!: string;
  ngOnInit(): void {""
  const storedTodolists = localStorage.getItem('todolist');
  if (storedTodolists) {
    this.tasks = JSON.parse(storedTodolists);
    console.log(this.tasks);
  } 
    }; 
  }

  // let tasks =[
    //   {text: 'mes plats', completed:false, quantity: 1}
    
    // ];
    // localStorage.setItem('tasks', JSON.stringify(tasks));
    //  tasks =JSON.parse (localStorage.getItem('tasks'))
    
    // addTask(){
    //     let tasks = JSON.parse (localStorage.getItem('tasks'));
    //     tasks.push({text: 'mes plat', completed: false})

    //     localStorage.setItem('tasks', JSON.stringify(tasks));
    //          }