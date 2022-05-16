import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideogameListComponent } from './videogame-list/videogame-list.component';

const routes: Routes = [
  {path: "game", component: VideogameListComponent},
  {path: "", redirectTo: "game", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
