import { Component, Input, OnInit, trigger, state, style, transition, animate } from '@angular/core';

import { AnimationService } from '../../animation/animation.service';
import { AnimationDirective } from '../../animation/animation.directive';

@Component({
  selector: 'rekt',
  templateUrl: './rekt.component.html',
  styleUrls: ['./rekt.component.css']
})
export class RektComponent implements OnInit {
    rektMatrix: string[][];
    @Input() word: string = 'REKT';
    @Input() width: number = 2;
    @Input() height: number = 2;
    sourceCode: string = 'getRekt: ' + this.getRekt.toString();

    constructor() { }

    ngOnInit(): void {
        this.updateRekt();
    }

    updateRekt(): void {
        this.rektMatrix = [];
        this.getRekt(this.word, this.width, this.height);
    }

    getRekt(input: string, width: number, height: number): void {
        var reversed;
        if (width % 2 === 0) {
            reversed = input.split('').reverse().join('') + input.substring(1, input.length);
        } else {
            reversed = input + input.split('').reverse().join('').substring(1, input.length);
        }
        var reversedMaxInd = reversed.length - 1;
        var inputMaxInd = input.length - 1;

        for (var rowInd = 0; rowInd <= inputMaxInd * height; rowInd++) {
            this.rektMatrix[rowInd] = [];
            for (var colInd = 0; colInd <= inputMaxInd * width; colInd++) {
                if (rowInd % inputMaxInd === 0 || colInd % inputMaxInd === 0) {
                    this.rektMatrix[rowInd].push(reversed[(rowInd + colInd) % reversedMaxInd]);
                } else {
                    this.rektMatrix[rowInd].push('');
                }
            }
        }
    }
}