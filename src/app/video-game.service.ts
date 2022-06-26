import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VideoGame } from './video-game';

@Injectable({
  providedIn: 'root'
})
export class VideoGameService {
  private allurl = "http://localhost:8080/game/all";
  private posturl = "http://localhost:8080/game/add";

  constructor(private talk: HttpClient) { }

  getGameList(): Observable<VideoGame[]>{
    return this.talk.get<VideoGame[]>(`${this.allurl}`);
  }
  createGame(videogame: VideoGame): Observable<Object>{
    return this.talk.post(`${this.posturl}`, videogame);
  }
}
