import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImagenLoginComponent } from './imagen-login/imagen-login.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { BannerLoginComponent } from './banner-login/banner-login.component';

@NgModule({
  declarations: [
    AppComponent,
    ImagenLoginComponent,
    FormLoginComponent,
    BannerLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
