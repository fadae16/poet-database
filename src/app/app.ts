import { Component, signal } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { PoetryDb } from './service/poetry-db';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('poet-database');
  poemTitle="";
  author="";
  poetryData:any;

  constructor(private poetryService:PoetryDb){ }

  getData(){
              //What I wanted to do was pass in values entered and change url accordingly
    this.poetryService.getPoetryData(/*this.poemTitle, this.author*/).subscribe((data:any)=>{
      this.poetryData=data;
    });
  }
}
