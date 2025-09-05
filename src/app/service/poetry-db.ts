import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PoetryDb {
  title="not changed";
  author="not changed";

  constructor(private http:HttpClient){ }

  getPoetryData(/*title:string, author:string*/){
    // console.log("Title from App: " + title);
    // console.log("Author from App: " + author);
    // this.title = title;
    // this.author = author;
    //console.log("Title in Service: " + this.title);
    //console.log("Author in Service: " + this.author);
    const url = 'https://poetrydb.org/author/Emily Dickinson/title,author,lines'//'https://poetrydb.org/author,title/Shakespeare;Sonnet%20100'//just hard-coded rn.
    // if (this.title.length == 0) 
    // {
    //   
    // } 
    // else if (this.author.length == 0) 
    // {
      
    // }

    return this.http.get(url);
  }
}
