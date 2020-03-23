import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterComponent } from './register/register.component';
import { RegFormComponent } from './reg-form/reg-form.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';





@NgModule({
  declarations: [


    AppComponent,
    NavbarComponent,
    ContactComponent,

    HomeComponent,
    FooterComponent,

    LoginFormComponent,
    LoginComponent,
    RegisterComponent,
    RegFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    RouterModule.forRoot(
      [



        {
          path: 'register',
          component: RegisterComponent
        },
      
        {
          path: '',
          component: HomeComponent
        },

   
        {
          path: 'contact',
          component: ContactComponent
        },
 {
          path: 'home',
          component: HomeComponent
        },
        {
          path: 'login',
          component: LoginComponent
        },


        // otherwise redirect to home
        { path: '**', redirectTo: '' }
      ]
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
