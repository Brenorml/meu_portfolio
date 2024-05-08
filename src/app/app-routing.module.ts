import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { DisciplineCardComponent } from './components/discipline-card/discipline-card.component';
import { IndexCardComponent } from './components/index-card/index-card.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: 'aboutme/:id',
    component: PortfolioComponent
  },
  {
    path: 'portfolio/discipline/:id',
    component: DisciplineCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
