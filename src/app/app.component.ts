import { Component, OnInit } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private wikiService: WikipediaService) {}

  ngOnInit(): void {}
  onTerm(term: string) {
    const results = this.wikiService.search(term);
    console.log(results);
  }
}
