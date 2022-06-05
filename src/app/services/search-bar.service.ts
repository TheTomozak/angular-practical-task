import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {SuggestedData} from "../models/SuggestedData";

@Injectable({
  providedIn: 'root'
})
export class SearchBarService {

  constructor(private http: HttpClient) {
  }

  baseUrl: string = environment.apiUrl;

  public list(): Observable<SuggestedData[]> {
    return this.http.get<SuggestedData[]>(`${this.baseUrl}20kMostUsedWords.json`);
  }

}
