import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateVideogameComponent } from './create-videogame/create-videogame.component';
import { VideogameListComponent } from './videogame-list/videogame-list.component';

const routes: Routes = [
  {path: "game", component: VideogameListComponent},
  {path: "", redirectTo: "game", pathMatch: "full"},
  {path: "create-game", component: CreateVideogameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
