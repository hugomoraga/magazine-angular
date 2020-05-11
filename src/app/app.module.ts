import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//ROUTES
import { APP_ROUTING } from './app.routes';

//SERVICES
import { ArticlesService } from './services/articles.service';

//COMPONENTS
import { AppComponent } from './app.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ArticleComponent } from './components/article/article.component';
import { AboutComponent } from './components/about/about.component';
import { ArticleCardComponent } from './components/article-card/article-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    SearchComponent,
    HomeComponent,
    NavbarComponent,
    ArticleComponent,
    AboutComponent,
    ArticleCardComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    ArticlesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
