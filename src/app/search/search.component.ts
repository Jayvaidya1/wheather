import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WeatherService} from '../services/weather/weather.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    weatherDetail = null;
    weatherFound: boolean = false;
    constructor(public activeRouter: ActivatedRoute, public weather: WeatherService) {
    }


    ngOnInit() {
        this.activeRouter.paramMap.subscribe((route: any) => {
            this.getWOIIdByCityname(route.params.name);
        });
    }
    
     getWOIIdByCityname(name) {
         this.weatherFound = false;
            this.weather.getWOIIdByCityname(name).subscribe(data => {
                if (data != []) {
                    console.log(JSON.stringify(data));
                    this.getWeatherDetailBywoiId(data[0]["woeid"]);
                }
            }, error => {});
    }

    getWeatherDetailBywoiId(woiid) {
        this.weather.getWeatherDetailBywoiId(woiid).subscribe(data => {
            if (data) {
                this.weatherDetail = data;
                this.weatherFound = true;
            }
        }, error => {});
    }

}
