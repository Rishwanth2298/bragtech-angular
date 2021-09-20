import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private titleService : Title,
    private meta : Meta
  ) {}

  ngOnInit(): void {
     this.titleService.setTitle('SEO Agency | SMO And Digital Marketing Agency London'),
     this.meta.addTag({name:'description',content:'Bragtech SEO Agency London offers affordable prices digital marketing & SMO Agency services in London, trying to build your business online.'}),
     this.meta.addTag({name:'keywords',content:'seo agency, seo agency london, london seo agency, seo services london, smo, seo, web design company london, social media agency london, social media marketing london, digitel marketing company london, smo london, smo agency london, Local SEO Agency in London, seo company in london, SEO company in UK, Best SEO company in london,uk'})
  }

}
