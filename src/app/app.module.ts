import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { HomeComponent } from './home/home.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ServicesInformationComponent } from './services-information/services-information.component';
import { PortefolioComponent } from './portefolio/portefolio.component';


@NgModule({
  declarations: [


    AppComponent,
    NavbarComponent,
  

    HomeComponent,
   
  

    HeaderComponent,
    ServicesInformationComponent,
    PortefolioComponent,


  ],
  imports: [

    BrowserModule,
    HttpClientModule,

    RouterModule.forRoot(


      [

        {
          path: 'portfolio',
          component: PortefolioComponent
        },

        {
          path: '',
          redirectTo: '/home', pathMatch: 'full'
        },
      
        {
          path: 'home',
          component: HomeComponent
        },

        // otherwise redirect to home
        { path: '**', redirectTo: '' }
      ]
    ),
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
