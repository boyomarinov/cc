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
import { AnimationService } from './animation/animation.service';
import { AnimationDirective } from './animation/animation.directive';

const routes: Routes = [
    { path: '', redirectTo: '/rekt', pathMatch: 'full' },
    { path: '', component: HomeComponent },
    { path: 'rekt', component: RektComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    RektComponent,
    AnimationDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [
    ChallengeService,
    AnimationService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
