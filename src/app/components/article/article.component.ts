import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from '../../services/articles.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {

  article:any = {};  

  constructor(private activatedRoute: ActivatedRoute, private _articlesService: ArticlesService) {
    this.activatedRoute.params.subscribe(params=> {
      this.article = this._articlesService.getArticle(params['id']);
      console.log(this.article);
    })
    
   }



}
