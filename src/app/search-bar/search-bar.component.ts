import {Component, OnInit} from '@angular/core';
import {SearchBarService} from "../services/search-bar.service";
import {SuggestedData} from "../models/SuggestedData";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor(private searchBarService: SearchBarService) {
  }

  suggestedWords?: SuggestedData[];
  wordFromInput: string = '';

  ngOnInit(): void {
    this.loadSuggestedWords()
  }

  loadSuggestedWords(): void {
    this.searchBarService
      .list()
      .subscribe({
        next: (words) => {
          this.suggestedWords = words;
        },
        error: (err) => {
          console.log(err)
        }

      });
  }

  searchPhraseInGoogleEngine(): void {
    let textToSearch = encodeURI(this.wordFromInput);
    window.open(`https://www.google.com/search?q=${textToSearch}`)
  }


}
