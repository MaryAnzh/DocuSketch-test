import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

import { iconsClass } from 'src/app/icons-data';
import { randomColor } from 'src/app/utile/randomColor';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})


export class SliderComponent {
  delay = 3000;
  timerInterval = 1000;
  iconIndex = 0;
  iconItemsList = iconsClass;
  icon = this.iconItemsList[this.iconIndex];

  color = randomColor();
  scale: 0 | 1 = 1;
  timerCount = this.delay / this.timerInterval;
  isButtonDisable = false;

  onClick = () => {
    this.isButtonDisable = true;
    this.scale = 0;
    this.timer();

    setTimeout(() => {
      this.color = randomColor();
      this.changeIcon();
      this.isButtonDisable = false;
      this.scale = 1;
      this.timerCount = this.delay / this.timerInterval;
    }, this.delay);

  }

  changeIcon = () => {
    const index = Math.floor(Math.random() * iconsClass.length);
    if (index === this.iconIndex) {
      this.changeIcon();
    } else {
      this.icon = iconsClass[index];
      this.iconIndex = index;
    }
  }

  timer = () => {
    const interval = setInterval(() => {
      this.timerCount -= 1;
      if (this.timerCount === 1) {
        clearInterval(interval);
      }
    }, this.timerInterval);
  }
}
