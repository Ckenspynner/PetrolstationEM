import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { IntroSectionComponent } from './intro-section/intro-section.component';
import { GallerySectionComponent } from './gallery-section/gallery-section.component';
import { ContentSectionComponent } from './content-section/content-section.component';
import { TestimonialsSectionComponent } from './testimonials-section/testimonials-section.component';
import { ClientsSectionComponent } from './clients-section/clients-section.component';
import { PricingSectionComponent } from './pricing-section/pricing-section.component';
import { SigninSignupSectionComponent } from './signin-signup-section/signin-signup-section.component';

const routes: Routes = [
  {path: '', redirectTo: '/validator', pathMatch: 'full' },
  {path: 'validator', component: SigninSignupSectionComponent },
  {path: 'Home', component: HeaderComponent },
  {path: 'About', component: IntroSectionComponent },
  {path: 'Services', component: ContentSectionComponent },
  {path: 'Testimonials', component: TestimonialsSectionComponent  },
  {path: 'Gallery', component: GallerySectionComponent },
  {path: 'Clients', component: ClientsSectionComponent },
  {path: 'Pricing', component: PricingSectionComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
