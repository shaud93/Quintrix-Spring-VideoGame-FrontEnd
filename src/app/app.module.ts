import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideogameListComponent } from './videogame-list/videogame-list.component';
import { CreateVideogameComponent } from './create-videogame/create-videogame.component';
import { FormsModule } from '@angular/forms';
import { UpdateGameComponent } from './update-game/update-game.component';

@NgModule({
  declarations: [
    AppComponent,
    VideogameListComponent,
    CreateVideogameComponent,
    UpdateGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
