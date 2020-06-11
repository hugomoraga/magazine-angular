import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ArticleComponent } from './components/article/article.component';
import { SearchComponent } from './components/search/search.component';
import { ArticleFormComponent } from './components/articles/article-form/article-form.component';

const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'articles', component: ArticlesComponent},
    {path: 'about', component: AboutComponent},
    {path: 'new', component: ArticleFormComponent},
    {path: 'article/:id', component: ArticleComponent},
    {path: 'search/:q', component: SearchComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);