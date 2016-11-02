import { Directive, Renderer, ElementRef, Input, AnimationPlayer, OnDestroy } from '@angular/core';
import { AnimationService } from "./animation.service";

@Directive({
    selector: '[anim]',
    providers: [AnimationService]
})

export class AnimationDirective implements OnDestroy {
    @Input('anim-duration') duration: number = 300;
    @Input('anim-delay') delay: number = 0;
    @Input('anim-easing') easing: string = "ease";
    @Input('anim-animation') animationName: string = "fadeIn";
    @Input('anim-animation-leave') animationLeave: string = "fadeOut";

    private _play: boolean = true;
    get play(): boolean {
        return this._play;
    }
    @Input('anim-play')
    set play(value: boolean) {
        this._play = value;
        this.setAnimation(!this._play);
        this.animation.play();
        this.animation.onDone(() => this.setAnimation(this._play));
    }

    private animation: AnimationPlayer;

    constructor(private renderer: Renderer, private element: ElementRef,
        private animationService: AnimationService) {

    }

    setAnimation(leaving: boolean = false) {
        let animationName = leaving ? this.animationLeave : this.animationName;
        this.animation = this.renderer.animate(
            this.element.nativeElement.firstElementChild || this.element.nativeElement,
            this.animationService.getAnimation(animationName).startingStyles,
            this.animationService.getAnimation(animationName).keyframes,
            this.duration,
            this.delay,
            this.easing
        );
        this.animation.pause();
    }

    ngAfterContentInit() {
        this.setAnimation();
        if (this._play)
            this.animation.play();
    }
    
    ngOnDestroy() {
        this.setAnimation(true);
        this.animation.play();
        setTimeout(() => { return true }, this.duration + this.delay);
    }
}