import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { VideoGame } from '../video-game';
import { VideoGameService } from '../video-game.service';

@Component({
  selector: 'app-create-videogame',
  templateUrl: './create-videogame.component.html',
  styleUrls: ['./create-videogame.component.css']
})
export class CreateVideogameComponent implements OnInit {

  videogame: VideoGame = new VideoGame();
  
  //gets the element from html
  @ViewChild('multi') multiPlayer: any;
  @ViewChild('xbox') xbox: any;
  @ViewChild('playstation') playStation: any;
  @ViewChild('pc') pc: any;
  
 
  
  //Contructor
  constructor(private service: VideoGameService, private router: Router) { }

  ngOnInit(): void {
  }

  saveGame(){
    this.service.createGame(this.videogame).subscribe(data =>{console.log(data)}, error => console.log(error));
    this.goBackToList();
  }

  goBackToList(){
    this.router.navigate(["/game"]).then(() => {location.reload()});
  }

  onSubmit(){
    console.log(this.videogame);

    console.log(this.xbox.nativeElement.value);
    //multiPlayer string to bool
    if(this.multiPlayer.nativeElement.value == "Supported") { this.videogame.multiPlayer = true}
    if(this.multiPlayer.nativeElement.value == "Not Supported") { this.videogame.multiPlayer = false}

    //xbox string to bool
    if(this.xbox.nativeElement.value == "Supported") { this.videogame.xbox = true}
    if(this.xbox.nativeElement.value == "Not Supported") { this.videogame.xbox = false}

    //playStation string to bool
    if(this.playStation.nativeElement.value == "Supported") { this.videogame.playStation = true}
    if(this.playStation.nativeElement.value == "Not Supported") { this.videogame.playStation = false}

    //pc string to bool
    if(this.pc.nativeElement.value == "Supported") { this.videogame.pc = true}
    if(this.pc.nativeElement.value == "Not Supported") { this.videogame.pc = false}

    console.log(this.videogame);

    this.saveGame();
  }

}
