import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html', 
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(
    private titleService : Title,
    private meta : Meta
  ) {}

  ngOnInit(): void {
     this.titleService.setTitle('Contact Us | Bragtech'),
     this.meta.addTag({name:'description',content:'Free to call or Leave message below you will get reply from Bragtech Immediately'}),
     this.meta.addTag({name:'keywords',content:'seo agency, seo agency london, london seo agency, seo services london, smo, seo, web design company london, social media agency london, social media marketing london, digitel marketing company london, smo london, smo agency london, Local SEO Agency in London, seo company in london, SEO company in UK, Best SEO company in london,uk'})
  }

    
  }
