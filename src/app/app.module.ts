import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';


import {AppComponent} from './app.component';
import {MT_ROUTES} from './app.routes';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(MT_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
