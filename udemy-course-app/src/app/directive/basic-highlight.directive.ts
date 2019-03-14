import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
  elementRef: ElementRef;

  constructor(elementRef: ElementRef) {
    this.elementRef = elementRef;
  }

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'red';
  }
}