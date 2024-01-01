import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WeatherAPIService {

  constructor(private http: HttpClient) { }

  getWeather(userInput: String): Observable<any> {
    if(userInput) {
      let geo = `http://api.openweathermap.org/geo/1.0/direct?q=${userInput}&limit=5&appid=ac802b896ba6c4fa64f4d24c4087a264`
      let url = `https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={b4575e38e0ba4219f7b23ff2d44931c1}`
      return this.http.get(url)
    }

    return of(null)

  }



    
  
}
