import { Component, OnInit } from '@angular/core';
import { ArticlesService, Article } from '../../services/articles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles: Article[] = [];

  constructor(private _articlesService: ArticlesService, private router: Router) { }

  ngOnInit() {
    this.articles = this._articlesService.getArticles();
  }

  viewArticle(idx:number){
    this.router.navigate(['/article', idx]);
  }


}
