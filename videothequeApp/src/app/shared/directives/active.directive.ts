import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appActive]'
})
export class ActiveDirective implements OnChanges {
@HostBinding('style.backgroundColor') backgroundColor: string;
@HostBinding('style.color') color: string;
@Input('appActive') isActive: boolean;

ngOnChanges() {
  if (this.isActive) {
    this.backgroundColor = '#2196F3';
    this.color = 'white';
  } else {
    this.backgroundColor = 'transparent';
    this.color = 'black';
  }
}

  constructor() { }

}
