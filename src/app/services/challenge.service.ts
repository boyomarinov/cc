import { Injectable } from '@angular/core';

import { Challenge } from '../models/challenge';
import { CHALLENGES } from './mock-challenges';

@Injectable()
export class ChallengeService {
    getChallenges(): Promise<Challenge[]> {
        return Promise.resolve(CHALLENGES);
    }
}
