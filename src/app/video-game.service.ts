import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VideoGame } from './video-game';

@Injectable({
  providedIn: 'root'
})
export class VideoGameService {
  private url = "http://localhost:8080/game/all";

  constructor(private talk: HttpClient) { }

  getGameList(): Observable<VideoGame[]>{
    return this.talk.get<VideoGame[]>(`${this.url}`);
  }
}
