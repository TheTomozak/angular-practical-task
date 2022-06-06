import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {SuggestedData} from "../models/SuggestedData";

@Injectable({
  providedIn: 'root'
})
export class SearchBarService {

  baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  public list(): Observable<SuggestedData[]> {
    return this.http.get<SuggestedData[]>(`${this.baseUrl}mostUsedWords.json`);
  }

}
