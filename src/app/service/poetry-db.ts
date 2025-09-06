import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Injector } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PoetryDb {

  constructor(private http:HttpClient, 
              /*@Inject('poemTitle') private title:string, 
              @Inject('author') private author:string*/)//when I tried to use injection entire project goes blank 
          { }

  getPoetryData(/*title:string, author:string*/){
    // console.log("Poem Title: " + this.title);
    // console.log("Poem Author: " + this.author);
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
