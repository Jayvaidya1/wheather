import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';

/**
 * @Info
 * All weather related services are declared here
 */
@Injectable()
export class WeatherService {

    constructor(public http: HttpClient,private spinner: NgxSpinnerService) {
    }
    hideSpinnerService(value) {
        this.spinner.hide();
        return value;
    }

    getWOIIdByCityname(cityName) {
        this.spinner.show();
        return this.http.get('https://www.codepiller.com/weatherapi/?command=search&keyword=' + cityName).pipe(map(res => this.hideSpinnerService(res)));
    }
    getWeatherDetailBywoiId(woiid) {
        this.spinner.show();
        return this.http.get('https://www.codepiller.com/weatherapi/?command=location&woeid='+woiid).pipe(map(res => this.hideSpinnerService(res)));
    }

}
