import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { SearchComponent } from './search/search.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'search/:name', component: SearchComponent},
  {path: 'WeatherDetailsComponent/:woiId', component: WeatherDetailsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
