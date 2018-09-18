import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {WeatherService} from '../services/weather/weather.service';
import {UiService} from '../services/ui/ui.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    darkMode: boolean = false;
    cityList = ["Istanbul", "Berlin", "London", "Helsinki", "Dublin", "Vancouver"];
    list = [];
    constructor(public weather: WeatherService,
        public router: Router,
        public ui: UiService) {
    }

    ngOnInit() {
        this.ui.darkModeState.subscribe((isDark) => {
            this.darkMode = isDark;
        });
        this.getWOIIdByCityname();
    }

    ngOnDestroy() {

    }

    getWOIIdByCityname() {
        for (let i = 0; i < this.cityList.length; i++) {
            this.weather.getWOIIdByCityname(this.cityList[i]).subscribe(data => {
                if (data) {
                    this.getWeatherDetailBywoiId(data[0]["woeid"]);
                }
            }, error => {});
        }
    }

    getWeatherDetailBywoiId(woiid) {
        this.weather.getWeatherDetailBywoiId(woiid).subscribe(data => {
            if (data) {
                this.list.push(data);
            }
        }, error => {});
    }
    
    showWeatherDetail(data){
        this.router.navigateByUrl('/WeatherDetailsComponent/'+data);
    }

}
