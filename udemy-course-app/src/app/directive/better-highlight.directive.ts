import { Directive, OnInit, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  renderer;
  elementRef;

  constructor(renderer: Renderer2, elementRef: ElementRef) {
    this.renderer = renderer;
    this.elementRef = elementRef;
  }

  ngOnInit() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'green', false, false);
  }

}
