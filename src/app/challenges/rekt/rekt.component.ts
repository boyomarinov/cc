import { Component, Input, OnInit } from '@angular/core';

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
        var reversed = input + input.split('').reverse().join('').substring(1, input.length);
        var reversedMaxInd = reversed.length - 1;
        var inputMaxInd = input.length - 1;
        var matrix = [];

        for (var rowInd = 0; rowInd < inputMaxInd * height + 1; rowInd++) {
            matrix[rowInd] = [];
            for (var colInd = 0; colInd < inputMaxInd * width + 1; colInd++) {
                if (rowInd % inputMaxInd === 0 || colInd % inputMaxInd === 0) {
                    matrix[rowInd].push(reversed[(rowInd + colInd) % reversedMaxInd]);
                } else {
                    matrix[rowInd].push('');
                }
            }
        }

        return matrix;
    }
}