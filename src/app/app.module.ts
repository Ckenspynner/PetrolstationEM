import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { IntroSectionComponent } from './intro-section/intro-section.component';
import { GallerySectionComponent } from './gallery-section/gallery-section.component';
import { ContentSectionComponent } from './content-section/content-section.component';
import { TestimonialsSectionComponent } from './testimonials-section/testimonials-section.component';
import { ClientsSectionComponent } from './clients-section/clients-section.component';
import { PricingSectionComponent } from './pricing-section/pricing-section.component';
import { FooterSectionComponent } from './footer-section/footer-section.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SocialMediaIconsComponent } from './social-media-icons/social-media-icons.component';
import { StationLogoSectionComponent } from './station-logo-section/station-logo-section.component';
import { BorderAnimationSectionComponent } from './border-animation-section/border-animation-section.component';
import { SigninSignupSectionComponent } from './signin-signup-section/signin-signup-section.component';
import { ModifiyUserComponent } from './modifiy-user/modifiy-user.component';
import { ModifyUserTableComponent } from './modify-user-table/modify-user-table.component';
import { SharedDataService } from './shared-data.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroSectionComponent,
    GallerySectionComponent,
    ContentSectionComponent,
    TestimonialsSectionComponent,
    ClientsSectionComponent,
    PricingSectionComponent,
    FooterSectionComponent,
    NavigationComponent,
    SocialMediaIconsComponent,
    StationLogoSectionComponent,
    BorderAnimationSectionComponent,
    SigninSignupSectionComponent,
    ModifiyUserComponent,
    ModifyUserTableComponent
  ],
  imports: [
    HttpClientModule,//import
    FormsModule,//import
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [
    //list as a provider
    //SharedDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
