import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-website-development-page',
  templateUrl: './website-development-page.component.html',
  styleUrls: ['./website-development-page.component.css']
})
export class WebsiteDevelopmentPageComponent implements OnInit {

  constructor(
    private titleService : Title,
    private meta : Meta
  ) {}

  ngOnInit(): void {
     this.titleService.setTitle('Website development | Bragtech'),
     this.meta.addTag({name:'description',content:'Experience the Best of Enterprise Grade SEO, SMO, Digital Marketing, Website Development and Android Apps with professional quality at relatively low cost.'}),
     this.meta.addTag({name:'keywords',content:'seo agency, seo agency london, london seo agency, seo services london, smo, seo, web design company london, social media agency london, social media marketing london, digitel marketing company london, smo london, smo agency london, Local SEO Agency in London, seo company in london, SEO company in UK, Best SEO company in london,uk'})
  }

}
