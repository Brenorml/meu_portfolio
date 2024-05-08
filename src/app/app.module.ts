import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MenuTitleComponent } from './components/menu-title/menu-title.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { HomeComponent } from './pages/home/home.component';
import { MiddleCardComponent } from './components/middle-card/middle-card.component';
import { BottomBarComponent } from './components/bottom-bar/bottom-bar.component';
import { FiveStarsComponent } from './tools/five-stars/five-stars.component';
import { ClientSatisfactionComponent } from './tools/client-satisfaction/client-satisfaction.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { DisciplineCardComponent } from './components/discipline-card/discipline-card.component';
import { IndexCardComponent } from './components/index-card/index-card.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    MenuTitleComponent,
    BigCardComponent,
    SmallCardComponent,
    HomeComponent,
    MiddleCardComponent,
    BottomBarComponent,
    FiveStarsComponent,
    ClientSatisfactionComponent,
    PortfolioComponent,
    DisciplineCardComponent,
    IndexCardComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
