import { MadenComponent } from './maden/maden.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstitutionalComponent } from './institutional/institutional.component';
import { KademeliComponent } from './kademeli/kademeli.component';
import { AgaclandirmaComponent } from './agaclandirma/agaclandirma.component';
import { MeraaComponent } from './meraa/meraa.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

const routes: Routes = [
  { path: 'institutional', component: InstitutionalComponent },
  { path: '', component: HomeComponent },
  { path: 'maden', component: MadenComponent },
  { path: 'mera', component: MeraaComponent },
  { path: 'agaclandirma', component: AgaclandirmaComponent },
  { path: 'kademeli', component: KademeliComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  exports: [RouterModule],
})
export class AppRoutingModule {}
