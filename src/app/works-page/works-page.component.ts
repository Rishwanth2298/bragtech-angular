import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-works-page',
  templateUrl: './works-page.component.html',
  styleUrls: ['./works-page.component.css']
})
export class WorksPageComponent implements OnInit {

  constructor(
    private titleService : Title,
    private meta : Meta
  ) {}

  ngOnInit(): void {
     this.titleService.setTitle('SMM Agency | SMM Agency London | Social Media Marketing Services'),
     this.meta.addTag({name:'description',content:'We are a leading SMM Agency in London, providing Social Media marketing services to brands looking to increase organic traffic on their website.'}),
     this.meta.addTag({name:'keywords',content:'seo agency, seo agency london, london seo agency, seo services london, smo, seo, web design company london, social media agency london, social media marketing london, digitel marketing company london, smo london, smo agency london, Local SEO Agency in London, seo company in london, SEO company in UK, Best SEO company in london,uk'})
  }

}
