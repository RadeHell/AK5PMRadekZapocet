import { Component, OnInit } from '@angular/core';
import { WeatherAPIService } from '../api/weather-api.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit {
  userInput: String = ''

  constructor(private apiService: WeatherAPIService) { }

  ngOnInit() {
  }

  weatherClicked(){
    console.log(this.userInput)
    this.apiService.getWeather(this.userInput)

  }

}
