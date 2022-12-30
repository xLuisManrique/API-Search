import { Component } from '@angular/core';
import { WikiService } from '../services/search.services';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent {

  title = 'wiki';
  searchTerm: any;
  results: any = [];

  totalResults: any;
  page: number = 1;

  constructor(private wiki: WikiService) {}

  onSubmit() {
    this.wiki.search(this.searchTerm).subscribe((res: any) => {
      this.results = res.query.search;

      this.totalResults = res.query.search.length;
      console.log(this.results);
    });
  }
}


