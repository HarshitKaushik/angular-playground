import {
  Directive,
  OnInit,
  Renderer2,
  ElementRef,
  HostListener,
  HostBinding
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  renderer;
  elementRef;

  @HostBinding('style.backgroundColor')
  backgroundColor: string;

  constructor(renderer: Renderer2, elementRef: ElementRef) {
    this.renderer = renderer;
    this.elementRef = elementRef;
  }

  ngOnInit() {
  }

  @HostListener('mouseenter')
  onMouseEnter(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'green', false, false);
  }

  @HostListener('mouseleave')
  onMouseLeave(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow', false, false);
    setTimeout(() => {
      console.log(this.backgroundColor);
      this.backgroundColor = 'red';
    }, 5000);
  }

}
