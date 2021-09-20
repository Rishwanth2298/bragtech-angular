import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { NgwWowService } from 'ngx-wow';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{


  title = 'brag-tech';
  showMe:boolean=false;

  constructor(private wowService: NgwWowService,public router: Router){  }

  ngOnInit(): void {
    this.wowService.init();

  }
    reset() {
        this.wowService.init();
    }
    toggleTag(){
      this.showMe=!this.showMe
    }

  
}

   


