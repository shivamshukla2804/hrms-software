import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appAvoidFirstSpace]",
})
export class AvoidFirstSpaceDirective {
  regexStr = "^[a-zA-Z0-9_]*$";
  constructor(private el: ElementRef) {}
  @HostListener('keydown', ['$event']) keydown(e:any) :any{
    if (e.which === 32 && e.target.selectionStart === 0 || e.which === 192 && e.target.selectionStart === 0) {
      return false;
    }
  }
}
