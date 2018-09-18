import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import { NgxSpinnerModule } from 'ngx-spinner';

import {HomeComponent} from './home/home.component';
import {WeatherService} from './services/weather/weather.service';
import {HttpClientModule} from '@angular/common/http';
import {WeatherCardComponent} from './ui/weather-card/weather-card.component';
import {AddCardComponent} from './ui/add-card/add-card.component';
import {UiService} from './services/ui/ui.service';
import {SearchComponent} from './search/search.component';
import {WeatherDetailsComponent} from './weather-details/weather-details.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        WeatherCardComponent,
        AddCardComponent,
        AddCardComponent,
        SearchComponent,
        WeatherDetailsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        MDBBootstrapModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        NgxSpinnerModule
    ],
    providers: [
        WeatherService,
        UiService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
