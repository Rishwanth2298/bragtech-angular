import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarModule, WavesModule, ButtonsModule ,CollapseModule ,InputsModule ,CardsModule } from 'angular-bootstrap-md';
import { HeaderComponent } from './header/header.component';
import { VideoSliderComponent } from './video-slider/video-slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import { NavBarPageComponent } from './nav-bar-page/nav-bar-page.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TabsComponent } from './tabs/tabs.component';
import {MatTabsModule} from '@angular/material/tabs';
import { HeroAboutComponent } from './hero-about/hero-about.component';
import { FooterComponent } from './footer/footer.component';
import { NgwWowModule } from 'ngx-wow';
// MDB Angular Free
import { IconsModule } from 'angular-bootstrap-md'
import {MatProgressBarModule} from '@angular/material/progress-bar'
import {MatCardModule} from '@angular/material/card';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselComponent } from './carousel/carousel.component';
import {MatDividerModule} from '@angular/material/divider';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { SeoPageComponent } from './seo-page/seo-page.component';
import { SmoPageComponent } from './smo-page/smo-page.component';
import { DigitalmarketingPageComponent } from './digitalmarketing-page/digitalmarketing-page.component';
import { ApplicationDevelopmentPageComponent } from './application-development-page/application-development-page.component';
import { WebsiteDevelopmentPageComponent } from './website-development-page/website-development-page.component';
import { WorksPageComponent } from './works-page/works-page.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from './message.service';
import {MatMenuModule} from '@angular/material/menu';
import {MatRippleModule} from '@angular/material/core';
import { PriceListComponent } from './price-list/price-list.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { DialogContentExampleComponent } from './dialog-content-example/dialog-content-example.component';
import { DialogContentExampleDialogComponent } from './dialog-content-example-dialog/dialog-content-example-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';





@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderComponent,
    VideoSliderComponent,
    NavBarPageComponent,
    TabsComponent,
    HeroAboutComponent,
    FooterComponent,
    CarouselComponent,
    ScrollToTopComponent,
    SeoPageComponent,
    SmoPageComponent,
    DigitalmarketingPageComponent,
    ApplicationDevelopmentPageComponent,
    WebsiteDevelopmentPageComponent,
    WorksPageComponent,
    PriceListComponent,
    ContactFormComponent,
    DialogContentExampleComponent,
    DialogContentExampleDialogComponent
    
 
 
  
    
    
   
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    NavbarModule,
    WavesModule,
    ButtonsModule,
    CollapseModule,
    BrowserAnimationsModule,
    MatTabsModule,    
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    NgwWowModule,
    InputsModule ,
    CardsModule,
    IconsModule,
    MatProgressBarModule,
    MatCardModule,
    CarouselModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,ReactiveFormsModule,
    MatSelectModule,
    HttpClientModule,
    MatExpansionModule,
    MatMenuModule,
    MatRippleModule,
    MatDialogModule
    

    
    
    
    
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
