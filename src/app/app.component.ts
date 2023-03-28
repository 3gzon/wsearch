import { Component, OnInit } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  pages=[];

  constructor(private wikiService: WikipediaService) {}

  ngOnInit(): void {}
  onTerm(term: string) {
   this.wikiService.search(term).subscribe((res:any)=>{
     console.log(res)
     this.pages=res?.query.search
   })
  }
}
