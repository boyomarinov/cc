import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { RektComponent } from './challenges/rekt/rekt.component';
import { ChallengeService } from './services/challenge.service';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'rekt', component: RektComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    RektComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  providers: [ChallengeService],
  bootstrap: [AppComponent]
})

export class AppModule { }
