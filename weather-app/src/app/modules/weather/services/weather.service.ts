import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '5574751c01fa6cfce3f57030294709a4';

  constructor(private httpClient: HttpClient) { }

  public getWeatherDatas(cityName: string): Observable<any> {
    return this.httpClient.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metrics&mode=json&appid=${this.apiKey}`,
      {}
    );
  }
}
