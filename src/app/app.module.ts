import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import 'hammerjs';

// import component material dan animation
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailItemComponent } from './detail-item/detail-item.component';

// import service
import { FilmsService } from './services/films.service';

// import pipe
import { FirebaseImagePipe } from './pipe/FirebaseImagePipe';
import { TruncatePipe } from './pipe/TruncatePipe';

import { AppRoutingModule } from './app-routing.module';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailItemComponent,
    FirebaseImagePipe,
    TruncatePipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    Ng2SearchPipeModule,
  ],
  exports: [
    MaterialModule,
    Ng2SearchPipeModule,

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  providers: [ FilmsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
