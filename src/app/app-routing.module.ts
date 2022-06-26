import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateVideogameComponent } from './create-videogame/create-videogame.component';
import { UpdateGameComponent } from './update-game/update-game.component';
import { VideogameListComponent } from './videogame-list/videogame-list.component';

// routes
const routes: Routes = [
  {path: "game", component: VideogameListComponent},
  {path: "", redirectTo: "game", pathMatch: "full"},
  {path: "create-game", component: CreateVideogameComponent},
  {path: "update-game/:id", component: UpdateGameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
