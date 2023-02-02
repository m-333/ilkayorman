import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScrollDirective } from './scroll.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { InstitutionalComponent } from './institutional/institutional.component';
import { MadenComponent } from './maden/maden.component';
import { KademeliComponent } from './kademeli/kademeli.component';
import { AgaclandirmaComponent } from './agaclandirma/agaclandirma.component';
import { MeraaComponent } from './meraa/meraa.component';


@NgModule({
  declarations: [		
    AppComponent,
    ScrollDirective,
    AboutComponent,
    HomeComponent,
      NavbarComponent,
      FooterComponent,
      InstitutionalComponent,
      MadenComponent,
      KademeliComponent,
      AgaclandirmaComponent,
      MeraaComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
