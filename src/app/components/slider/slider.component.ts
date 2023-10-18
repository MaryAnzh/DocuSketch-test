import { Component } from '@angular/core';
import { iconsClass } from 'src/app/icons-data';
import { randomColor } from 'src/app/utile/randomColor';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})


export class SliderComponent {
  iconIndex = 0;
  icon = iconsClass[this.iconIndex];
  color = randomColor();
  animation = 0;
  isButtonDisable = false;

  onClick = () => {
    this.isButtonDisable = true;
    setTimeout(() => {
      this.color = randomColor();
      this.changeIcon();
      this.isButtonDisable = false;
    }, 3000);

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

  changAnimation = () => {

  }
}
