import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent implements OnInit {

  @Input() article: any = {}
  @Input() index: number;


  constructor(private router: Router) { }

  ngOnInit() {
  }

  viewArticle(){
    this.router.navigate(['/article', this.index]);
  }

}
