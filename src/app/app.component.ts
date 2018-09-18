import {Component, OnInit} from '@angular/core';
import {UiService} from './services/ui/ui.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'weather';
    showMenu = false;
    darkModeActive: boolean;
    search=null;
    showSearch = false;
    constructor(public ui: UiService,public router: Router) {
    }

    ngOnInit() {
        this.ui.darkModeState.subscribe((value) => {
            this.darkModeActive = value;
        });
        this.showSearch = true;
    }
    toggleMenu() {
        this.showMenu = !this.showMenu;
    }

    modeToggleSwitch() {
        this.ui.darkModeState.next(!this.darkModeActive);
    }
    
    searchWeather(){
           this.router.navigateByUrl('/search/'+this.search);
           this.showSearch = false;
    }
}
