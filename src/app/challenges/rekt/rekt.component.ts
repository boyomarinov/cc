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
        this.rektMatrix = this.getRekt(this.word, this.width, this.height);
    }

    getRekt(input: string, width: number, height: number): string[][] {
        var template = createTemplate(width % 2 !== 0 ? input : reverse(input));
        var templateMaxInd = template.length - 1;
        var inputMaxInd = input.length - 1;
        var matrix = [];

        for (var rowInd = 0; rowInd <= inputMaxInd * height; rowInd++) {
            matrix[rowInd] = [];
            for (var colInd = 0; colInd <= inputMaxInd * width; colInd++) {
                if (rowInd % inputMaxInd === 0 || colInd % inputMaxInd === 0) {
                    matrix[rowInd].push(template[(rowInd + colInd) % templateMaxInd]);
                } else {
                    matrix[rowInd].push('');
                }
            }
        }
        return matrix;

        function createTemplate(word) {
            return word + reverse(word).substring(1, word.length);
        }

        function reverse(str) {
            return str.split('').reverse().join('');
        }
    }
}