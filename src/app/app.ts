import { Component, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('poet-database');

  url="";
  poetryData:any;

  constructor(private http:HttpClient){ }

  getData(poemTitle:string, author:string){
    if(poemTitle.length == 0 && author.length > 0)
    {
      this.url="https://poetrydb.org/author/" + author + "/title,author,lines";
    }
    else if (poemTitle.length > 0 && author.length == 0)
    {
      this.url="https://poetrydb.org/title/" + poemTitle + "/title,author,lines";
    }
    else if (poemTitle.length > 0 && author.length > 0)
    {
      this.url="https://poetrydb.org/title,author/" + poemTitle + ";" + author + "/title,author,lines";
    }
    else
    {
      this.url="https://poetrydb.org/author/Emily Dickinson/title,author,lines"
    }

    this.poetryData = this.http.get(this.url);
    this.poetryData.subscribe((response:any) => {//was not able to get error checking to work sadly
        this.poetryData = response;
        console.log('Data fetched:', this.poetryData);
      },
      (error:any) => {
        console.error('Error fetching data:', error);
      })
  }
}
