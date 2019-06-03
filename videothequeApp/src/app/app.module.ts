import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FilmsListComponent } from './films-container/films-list/films-list.component';
import { FilmsDetailsComponent } from './films-container/films-details/films-details.component';
import { FormsModule } from '@angular/forms';
import { FilmsContainerComponent } from './films-container/films-container.component';
import { ActiveDirective } from './shared/directives/active.directive';
import { PanierComponent } from './panier/panier.component';
import { PanierListComponent } from './panier/panier-list/panier-list.component';
import { AppRouting } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilmsListComponent,
    FilmsDetailsComponent,
    FilmsContainerComponent,
    ActiveDirective,
    PanierComponent,
    PanierListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
