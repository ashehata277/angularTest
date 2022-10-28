import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
class HideAfterContext {
  public hideAfter = 0;
  public counter = 0;
}
@Directive({
  selector: '[hideAfter]'
})
export class HideAfterDirective implements OnInit {
  private _delay = 0;
  @Input('hideAfter')
  set delay(value: number | null) {
    this._delay = value ?? 0;
    this.context.hideAfter = this.context.counter = this._delay / 1000;
  }
  @Input('hideAfterThen') placeholder: TemplateRef<HideAfterContext> | null = null;
  constructor(private template: TemplateRef<HideAfterContext>,
    private viewContainter: ViewContainerRef) {
  }
  private context = new HideAfterContext();


  ngOnInit(): void {
    this.viewContainter.createEmbeddedView(this.template, this.context);
    const IntervalId = setInterval(() => {
      this.context.counter--;
    }, 1000)
    setTimeout(() => {
      this.viewContainter.clear();
      if (this.placeholder) this.viewContainter.createEmbeddedView(this.placeholder);
      clearInterval(IntervalId);
    }, this._delay);
  }
  static ngTemplateContextGuard(dir: HideAfterDirective, context: unknown): context is HideAfterContext { return true };
}
