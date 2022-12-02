import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  mainUrl : string = "https://finnhub.io/api/v1/";

  constructor(private http : HttpClient) {
   }
  getQuote (symbol : string) {
    return this.http.get(this.mainUrl + "quote?symbol=" + symbol + "&token=bu4f8kn48v6uehqi3cqg");
  }

  getProfileName (symbol : string) {
    return this.http.get(this.mainUrl + "stock/profile2?symbol=" + symbol + "&token=bu4f8kn48v6uehqi3cqg");
  }
  
  getSentimentById (id : string) {
    return this.http.get(this.mainUrl + "stock/insider-sentiment?symbol=" + id + "&from=2022-09-01&to=2022-12-01&token=bu4f8kn48v6uehqi3cqg");
  }
}
