import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MainComponent } from './modules/main/main.component';
import { InfoComponent } from './modules/info/info.component';
import { WhycsComponent } from './modules/whycs/whycs.component';
import { TrycsComponent } from './modules/trycs/trycs.component';
import { FaqComponent } from './modules/faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MainComponent,
    InfoComponent,
    WhycsComponent,
    TrycsComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
