import { Component } from '@angular/core';
import { iconsClass } from 'src/app/icons-data';
import { randomColor } from 'src/app/utile/randomColor';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})


export class SliderComponent {
  icon = iconsClass[0];
  color = randomColor();

  onClick = () => {

  }
}
