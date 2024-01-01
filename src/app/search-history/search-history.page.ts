import { Component, OnInit } from '@angular/core';
import { HistoryServiceService } from '../storage/history-service.service';

@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.page.html',
  styleUrls: ['./search-history.page.scss'],
})
export class SearchHistoryPage implements OnInit {

  constructor(private storage:HistoryServiceService) { }

  ngOnInit() {
  }

}
