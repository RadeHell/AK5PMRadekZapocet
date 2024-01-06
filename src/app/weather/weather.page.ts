import { Component, OnInit } from '@angular/core';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Observable } from 'rxjs';
import { WeatherAPIService } from '../api/weather-api.service';
import { SearchHistoryPage } from '../search-history/search-history.page';
import { HistorySearchService } from '../storage/history-search.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage  {

  weatherOutput$: Observable<any> = this.apiService.getWeather("")
  historyArray: Array<string> = []
  userInput: String = ''
  //vysledek: Int = 0

 
  constructor(
    private storage: HistorySearchService,
    private apiService: WeatherAPIService
    ) { }

    async ionViewDidEnter () {
      const storedData = await this.storage.get('history');
      if (storedData) {
        this.historyArray = JSON.parse(storedData);
      }
    }
  

  weatherClicked(){
    console.log(this.userInput)
    this.weatherOutput$ = this.apiService.getWeather(this.userInput)
    
    
    
    this.weatherOutput$.subscribe(data => {
    let date: Date = new Date();
    let historyItem = `Record of city ${this.userInput} was ${data.main.temp}`
    //let historyItem = `${this.userInput} -> ${data.responseData.translatedText}`
    this.historyArray.unshift(historyItem)
    this.storage.set('history',JSON.stringify(this.historyArray))
    
    } )
    
  }

}
