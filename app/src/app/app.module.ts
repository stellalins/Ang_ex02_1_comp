import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputTextComponent } from './input-text/input-text.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { InputEmailComponent } from './input-email/input-email.component';
import { InputButtonComponent } from './input-button/input-button.component';
import { InputPasswordComponent } from './input-password/input-password.component';
import { H1Component } from './h1/h1.component';


@NgModule({
  declarations: [
    AppComponent,
    InputTextComponent,
    InputNumberComponent,
    InputEmailComponent,
    InputButtonComponent,
    InputPasswordComponent,
    H1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
