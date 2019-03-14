import {
  Directive,
  OnInit,
  Input,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

@Directive({
  selector: '[unless]'
})
export class UnlessDirective implements OnInit {
  @Input() set unless(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {
  }

  ngOnInit() {
  }
}