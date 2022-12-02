import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  title1 = 'Stock-Tracking-App';
  stockInput: string = '';
  stocks = [];

  constructor(private dataService: DataService, private route: Router) {
    const preData = localStorage.getItem('preData');
    let dataCheck = JSON.parse(preData);
    console.log(JSON.parse(preData));
    if (!!dataCheck && dataCheck.length > 0) {
      this.stocks = dataCheck;
    }
  }

  ngOnInit(): void {}

  displayStock() {
    console.log(this.stockInput);
    this.dataService.getProfileName(this.stockInput).subscribe((data) => {
      console.log('data:', data);
      this.getResponse(data);
    });
  }

  getResponse(responseData) {
    this.dataService.getQuote(this.stockInput).subscribe((response) => {
      console.log('res:', response, responseData);
      response['searchInput'] = this.stockInput;
      response['title'] = responseData.name;
      this.stocks.push(response);
      let storeData = JSON.stringify(this.stocks);
      localStorage.setItem('preData', storeData);
    });
  }

  removeStock(stock) {
    console.log(stock);
    this.stocks = this.stocks.filter(
      (elememnt) => elememnt['searchInput'] !== stock['searchInput']
    );
    let storeTheData = JSON.stringify(this.stocks);
    localStorage.setItem('preData', storeTheData);
  }

  navigateToDetails(stock) {
    console.log(stock);
    let url: string = '/sentiment/' + stock;
    this.route.navigateByUrl(url);
  }
}
