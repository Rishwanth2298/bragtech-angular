import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-application-development-page',
  templateUrl: './application-development-page.component.html',
  styleUrls: ['./application-development-page.component.css']
})
export class ApplicationDevelopmentPageComponent implements OnInit {

  constructor(
    private titleService : Title,
    private meta : Meta
  ) {}

  ngOnInit(): void {
     this.titleService.setTitle('Google Search Results | Bragtech'),
     this.meta.addTag({name:'description',content:'Experience is the Best of Enterprise Grade SEO, SMO, Digital Marketing, Website Development and Android Apps with professional quality at relatively low cost.'}),
     this.meta.addTag({name:'keywords',content:'seo agency, seo agency london, london seo agency, seo services london, smo, seo, web design company london, social media agency london, social media marketing london, digitel marketing company london, smo london, smo agency london, Local SEO Agency in London, seo company in london, SEO company in UK, Best SEO company in london,uk'})
  }


}
