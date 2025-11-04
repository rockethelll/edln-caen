import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
})
export class Card {
  name = input<string>();
  image = input<string>();
  link = input<string>();
  age = input<string>();
  color = input<string>();

  tiltClass(): string {
    const n = this.name();
    if (!n) return '';
    let sum = 0;
    for (let i = 0; i < n.length; i++) {
      sum += n.charCodeAt(i);
    }
    return sum % 2 === 0 ? 'rotate-2' : '-rotate-2';
  }
}
