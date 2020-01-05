import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatExpansionModule,
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatDialogModule, MatInputModule, MatProgressSpinnerModule
} from '@angular/material';

import {GeneralMenuComponent} from './components/general-menu/general-menu.component';
import {HomeComponent} from './components/home/home.component';
import {IntroComponent} from './components/intro/intro.component';
import {WhatWeDoComponent} from './components/what-we-do/what-we-do.component';
import {InternshipsGeneralComponent} from './components/internships-general/internships-general.component';
import {FeedbackComponent} from './components/feedback/feedback.component';
import {ContactComponent} from './components/contact/contact.component';
import {StatisticsComponent} from './components/statistics/statistics.component';
import {FooterComponent} from './components/footer/footer.component';
import { MaterialFileInputModule } from 'ngx-material-file-input';
const materialComponents = [
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatCardModule,
  MatExpansionModule,
  MatDialogModule,
  MatInputModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatButtonModule,
  MatProgressSpinnerModule
];

import {SwiperModule} from 'ngx-swiper-wrapper';
import {SWIPER_CONFIG} from 'ngx-swiper-wrapper';
import {SwiperConfigInterface} from 'ngx-swiper-wrapper';
import {LogoutDialog} from './components/logout-dialog/logout-dialog';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {JwtInterceptor} from './auth/JwtInterceptor';
import {ErrorInterceptor} from './auth/ErrorInterceptor';
import { ShowMoreLessTextComponent } from './components/show-more-less-text/show-more-less-text.component';
import {TruncateModule} from '@yellowspot/ng-truncate';


const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    AppComponent,
    GeneralMenuComponent,
    HomeComponent,
    IntroComponent,
    WhatWeDoComponent,
    InternshipsGeneralComponent,
    FeedbackComponent,
    ContactComponent,
    StatisticsComponent,
    FooterComponent,
    LogoutDialog,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    materialComponents,
    SwiperModule,
    FormsModule,
    HttpClientModule,
    MaterialFileInputModule,
    TruncateModule
  ],
  providers: [{
    provide: {SWIPER_CONFIG},
    useValue: DEFAULT_SWIPER_CONFIG
  },
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}],
  entryComponents: [LogoutDialog],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
