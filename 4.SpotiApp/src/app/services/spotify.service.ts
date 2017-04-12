import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import of the map
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas:any [] = [];
  searchUrl:string = "https://api.spotify.com/v1/search";
  artistUrl:string = "https://api.spotify.com/v1/artists/";


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

  getArtist( id:string) {

    let query = `${ id }`;
    let url = this.artistUrl + query;


    return this.http.get(url)
            .map( res => {
              console.log(res.json());
              return res.json();
            });
  }

  getTopArtist( id:string, country:string) {

    let query = `${ id }/top-tracks?country=${ country }`;
    let url = this.artistUrl + query;


    return this.http.get(url)
            .map( res => {
              console.log(res.json().tracks);
              return res.json().tracks;
            });
  }

}
