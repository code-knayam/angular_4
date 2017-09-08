import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor :string = 'transparent';
  @Input() highlightColor :string = 'blue';
  @HostBinding( 'style.backgroundColor') backgroundColor : string;
  // we can assign defaultColor to backgorundColor above also but 
  // then it would pass the value before property binding is completed
  // and transparent would be received

  constructor(private eleRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle( this.eleRef.nativeElement, 'background-color', 'green' );
  }

  @HostListener('mouseenter') mouseneter(eventData: Event) {
    // this.renderer.setStyle( this.eleRef.nativeElement, 'background-color', 'blue' );
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle( this.eleRef.nativeElement, 'background-color', 'transparent' );
    this.backgroundColor = this.defaultColor;
  }

}
