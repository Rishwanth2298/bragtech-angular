import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-seo-page',
  templateUrl: './seo-page.component.html',
  styleUrls: ['./seo-page.component.css']
})
export class SeoPageComponent implements OnInit {

  constructor(
    private titleService : Title,
    private meta : Meta
  ) {}

  ngOnInit(): void {
     this.titleService.setTitle('SEO Agency | SEO Agency London | Search Engine Optimization Services'),
     this.meta.addTag({name:'description',content:'We are a leading SEO Agency in London, providing Search Engine Optimization Services to brands looking to increase organic traffic on their website.'}),
     this.meta.addTag({name:'keywords',content:'seo agency, seo agency london, london seo agency, seo services london, smo, seo, web design company london, social media agency london, social media marketing london, digitel marketing company london, smo london, smo agency london, Local SEO Agency in London, seo company in london, SEO company in UK, Best SEO company in london,uk'})
  }

}
