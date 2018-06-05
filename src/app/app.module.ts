import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialCustomModule } from './material-custom/material-custom.module';

import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { CentralViewComponent } from './central-view/central-view.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CentralViewComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialCustomModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
