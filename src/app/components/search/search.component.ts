import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from '../../services/articles.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  articles: any[] = [];
  q: string;


  constructor(private activatedRoute: ActivatedRoute, private _articlesSerice: ArticlesService ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.q = params['q'];
      this.articles = this._articlesSerice.searchArticles(params['q']);
      
    })
  }


}
