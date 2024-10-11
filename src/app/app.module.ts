import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BotonesSesionComponent } from './botones-sesion/botones-sesion.component';
import { BadgeComponent } from './badge/badge.component';
import { PreguntasFrecuentesComponent } from './preguntas-frecuentes/preguntas-frecuentes.component';
import { NovoWebhookComponent } from './novo-webhook/novo-webhook.component';

@NgModule({
  declarations: [AppComponent, LayoutComponent, BadgeComponent, NavbarComponent, BotonesSesionComponent, PreguntasFrecuentesComponent, NovoWebhookComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
