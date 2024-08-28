import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environment';
import { WeatherDatas } from 'src/app/models/interfaces/weatherDatas';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private readonly baseUrl = `${environment.apiUrl}weather`;
  private readonly apiKey = environment.apiKey;

  constructor(private httpClient: HttpClient) { }

  public getWeatherDatas(cityName: string): Observable<WeatherDatas> {
    return this.httpClient.get<WeatherDatas>(`${this.baseUrl}?q=${cityName}&units=metrics&mode=json&appid=${this.apiKey}`,
      {}
    );
  }
}
