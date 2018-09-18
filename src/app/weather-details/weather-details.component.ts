import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WeatherService} from '../services/weather/weather.service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit {
    weatherDetail={};
  constructor(public activeRouter: ActivatedRoute, public weather: WeatherService) {
  }

  ngOnInit() {
    this.activeRouter.paramMap.subscribe((route: any) => {
        this.getWeatherDetailBywoiId(route.params.woiId);
    });
  }
  getWeatherDetailBywoiId(woiid) {
        this.weather.getWeatherDetailBywoiId(woiid).subscribe(data => {
            if (data) {
                this.weatherDetail = data;
                console.log(JSON.stringify(this.weatherDetail));
            }
        }, error => {});
    }
}
