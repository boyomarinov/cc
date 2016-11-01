import { Component, OnInit } from '@angular/core';

import { Challenge } from '../models/challenge';
import { ChallengeService } from '../services/challenge.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  challenges: Challenge[];

  constructor(
        private challengeService: ChallengeService
    ) { }

   ngOnInit(): void {
        this.challengeService.getChallenges()
            .then(challenges => this.challenges = challenges);
    }
}