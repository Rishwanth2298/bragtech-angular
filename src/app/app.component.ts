import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
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

  constructor(private wowService: NgwWowService,public router: Router,private renderer: Renderer2, @Inject(DOCUMENT) private _document: any,  @Inject(PLATFORM_ID) private platformId: Object)
{
    if(isPlatformBrowser(this.platformId)) //Client side execution
    {
        this.injectScripts();
    }   
}
injectScripts()
{
    
    const gtmScriptTag = this.renderer.createElement('script');
    gtmScriptTag.type = 'text/javascript';
    gtmScriptTag.src = 'https://www.googletagmanager.com/gtag/js?id=UA-206690540-1';
    this.renderer.appendChild(this._document.body, gtmScriptTag);
    
    
    const gtagInitScript = this.renderer.createElement('script');
    gtagInitScript.type = 'text/javascript';
    gtagInitScript.text = `
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'UA-206690540-1');
    `;
    this.renderer.appendChild(this._document.body, gtagInitScript);
}
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

   


