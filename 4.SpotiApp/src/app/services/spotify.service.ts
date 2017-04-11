import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import of the map
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas:any [] = [];
  searchUrl:string = "https://api.spotify.com/v1/search";

  constructor( private http:Http) { }

  getArtists( artistName:string) {

    let query = `?q=${ artistName }&type=artist`;
    let url = this.searchUrl + query;


    return this.http.get(url)
            .map( res => {
              // console.log(res.json().artists.items);
              this.artistas = res.json().artists.items;
              console.log(this.artistas);
              // return res.json().artists.items;
            });
  }

}
