import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[brRepeat]'
})
export class RepeatDirective {

  @Input() set brRepeat(times: number) {
    this.vcr.clear();
    for (let i = 0; i < times; i++) {
      this.vcr.createEmbeddedView(this.template);
    }
  }

  constructor(
    private template: TemplateRef<any>,
    private vcr: ViewContainerRef
  ) { }
}
