//Simple singleton service holding all our anims
import { Injectable } from '@angular/core';
import { AnimationStyles } from "@angular/core/src/animation/animation_styles";
import { AnimationKeyframe } from "@angular/core/src/animation/animation_keyframe";
import * as animationConst from './animation.const';

@Injectable()
export class AnimationService {
    private animations: {
        startingStyles: AnimationStyles,
        keyframes: AnimationKeyframe[]
    }[] = [];

    constructor() {
        this.animations = animationConst.animations;
    }

    getAnimation(name: string) {
        return this.animations[name];
    }
}