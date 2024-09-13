import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [AppComponent, LayoutComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ButtonComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
