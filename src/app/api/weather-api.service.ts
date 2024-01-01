import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WeatherAPIService {

  constructor(private http: HttpClient) { }

  getWeather(userInput: String): Observable<any> {
    if(userInput) {
       //let userInput = "London"
      //let url = `https://api.openweathermap.org/data/2.5/weather?lat=${userInput}&lon=10.99&appid=b4575e38e0ba4219f7b23ff2d44931c1`
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&units=metric&appid=b4575e38e0ba4219f7b23ff2d44931c1`

     //let url = `https://api.mymemory.translated.net/get?q=${userInput}&langpair=cs|en`
     
     return this.http.get(url)
    }
    return of(null)

  }
 
}
