import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ApplicationDevelopmentPageComponent } from './application-development-page/application-development-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DigitalmarketingPageComponent } from './digitalmarketing-page/digitalmarketing-page.component';
import { HomeComponent } from './home/home.component';
import { SeoPageComponent } from './seo-page/seo-page.component';
import { SmoPageComponent } from './smo-page/smo-page.component';
import { WebsiteDevelopmentPageComponent } from './website-development-page/website-development-page.component';
import { WorksPageComponent } from './works-page/works-page.component';

const routes: Routes = [
  {path: '', component:HomeComponent , pathMatch:'full'}, 
  
  {path: 'about', component:AboutComponent},
  {path: 'contact-us', component:ContactUsComponent},
  {path: 'works', component:WorksPageComponent},
  {path: 'seo', component:SeoPageComponent},
  {path: 'smo', component:SmoPageComponent},
  {path: 'digitalmarketing', component:DigitalmarketingPageComponent},
  {path: 'google-search-result', component:ApplicationDevelopmentPageComponent},
  {path: 'website-developement', component:WebsiteDevelopmentPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,AboutComponent,ContactUsComponent,WorksPageComponent,SeoPageComponent,SmoPageComponent,DigitalmarketingPageComponent,ApplicationDevelopmentPageComponent,WebsiteDevelopmentPageComponent]