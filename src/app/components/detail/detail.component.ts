import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  stockInput: string = '';
  stockId: string = '';
  stockName: string = '';
  stocks: any = [];
  monthArray = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  constructor(
    private router: ActivatedRoute,
    private dataService: DataService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.router.params.subscribe((param) => {
      console.log(param['id']);
      this.stockId = param['id'];

      const preData: any = localStorage.getItem('preData');
      let dataCheck = JSON.parse(preData);

      let nameValue = dataCheck.filter(
        (element: any) => element['searchInput'] == param['id']
      );
      console.log('previousData', JSON.parse(preData), nameValue);
      this.stockName = `${nameValue[0]['title']} (${param['id']})`;
      console.log(this.stockName);
      this.trackStock(param['id']);
    });
  }

  trackStock(id: string) {
    this.dataService.getSentimentById(id).subscribe((data) => {
      this.stocks.push(data);
      console.log('Response received', this.stocks);
    });
  }
  redirectDetailsPage() {
    console.log('Back to stocks');
    let url: string = '';
    this.route.navigateByUrl(url);
  }
}
