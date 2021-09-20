import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-digitalmarketing-page',
  templateUrl: './digitalmarketing-page.component.html',
  styleUrls: ['./digitalmarketing-page.component.css']
})
export class DigitalmarketingPageComponent implements OnInit {

  constructor(
    private titleService : Title,
    private meta : Meta
  ) {}

  ngOnInit(): void {
     this.titleService.setTitle('Digital Marketing | Best Digital Marketing Agency London | Bragtech'),
     this.meta.addTag({name:'description',content:'We are a leading Digital Marketing Agency London, Providing services like SEO, PPC, SMO, Digital Marketing. We rank small businesses at affordable prices.'}),
     this.meta.addTag({name:'keywords',content:'seo agency, seo agency london, london seo agency, seo services london, smo, seo, web design company london, social media agency london, social media marketing london, digitel marketing company london, smo london, smo agency london, Local SEO Agency in London, seo company in london, SEO company in UK, Best SEO company in london,uk'})
  }

}
