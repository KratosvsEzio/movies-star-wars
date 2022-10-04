import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '@app/misc/header/header.component';
import { NavbarComponent } from '@app/misc/navbar/navbar.component';
import { WorkInProgressComponent } from '@app/misc/work-in-progress/work-in-progress.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, 
    NavbarComponent,
    WorkInProgressComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
