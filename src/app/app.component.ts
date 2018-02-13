import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from './shared/location';
import { WeatherInfo } from './shared/weatherInfo';
import { WeatherDetail } from './shared/weatherDetail';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  
  locations: Location[];
  weatherInfo: WeatherInfo;
  weatherDetail: WeatherDetail;
  public showWeatherInfo: Boolean = false;
  public showLocationsList: Boolean = false;

  constructor(private http: HttpClient){
  }
 
  search(query): void {
    this.http.get<Location[]>('api/location/search/?query=' + query)
    .subscribe(locations => {
      this.locations = locations;
      this.showLocationsList = true;
      this.showWeatherInfo = false;
    });
  }

  getWeatherInfo(woeid : number): void {
    this.http.get<WeatherInfo>('api/location/' + woeid + '/')
    .subscribe(weatherInfo => {
      this.weatherInfo = weatherInfo;
      this.showLocationsList = false;
      this.showWeatherInfo = true;
    });
  }

 
  





 


}
