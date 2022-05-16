import { Component, OnInit } from '@angular/core';
import { VideoGame } from '../video-game';
import { VideoGameService } from '../video-game.service';





@Component({
  selector: 'app-videogame-list',
  templateUrl: './videogame-list.component.html',
  styleUrls: ['./videogame-list.component.css']
})
export class VideogameListComponent implements OnInit {

  videogame: VideoGame[] | undefined;


  constructor(private service: VideoGameService) {
  }

  
  ngOnInit(): void {
    this.getGameList();
  }
 

  private getGameList() {
    this.service.getGameList().subscribe(data => {this.videogame = data});
  }
  

}
