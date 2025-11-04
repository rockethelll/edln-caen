import { Component, input } from '@angular/core';

@Component({
  selector: 'app-text-with-wave',
  imports: [],
  templateUrl: './text-with-wave.html',
})
export class TextWithWave {
  text= input<string>()
}
