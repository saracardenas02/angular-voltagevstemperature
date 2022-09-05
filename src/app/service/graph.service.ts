import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GraphService {

  API: string = 'http://localhost/temp/';

  constructor(private ClientHttp:HttpClient) { }

  getGraphs(){
    const headers: HttpHeaders = new HttpHeaders();
    return this.ClientHttp.get<any[]>(this.API, {headers:headers});
  }
}
