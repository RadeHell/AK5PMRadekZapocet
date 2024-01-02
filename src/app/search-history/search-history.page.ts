import { Component, OnInit } from '@angular/core';
import { HistorySearchService } from '../storage/history-search.service';
@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.page.html',
  styleUrls: ['./search-history.page.scss'],
})
export class SearchHistoryPage {

  storedData: Array<any> = []

  constructor(private storage: HistorySearchService) { }

  async ionViewWillEnter() {
    const storedData = await this.storage.get('history');
    if (storedData) {
      this.storedData = JSON.parse(storedData);
      console.log(this.storedData)
    }
  }

}
