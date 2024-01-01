import { Component, OnInit } from '@angular/core';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Observable } from 'rxjs';
import { WeatherAPIService } from '../api/weather-api.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit {

  userInput: String = ''
  //vysledek: Int = 0

  weatherOutput$: Observable<any> = this.apiService.getWeather("")
  constructor(private apiService: WeatherAPIService) { }

  ngOnInit() {
  }

  weatherClicked(){
    console.log(this.userInput)
    this.weatherOutput$ = this.apiService.getWeather(this.userInput)

  }

}
