import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = false;
  menus = [
    {
      name: 'life-cycle',
      path: 'life-cycle'
    },
    {
      name: 'change-detection',
      path: 'change-detection'
    },
    {
      name: 'directive-study',
      path: 'directive-study'
    },
    {
      name: 'space',
      path: 'space'
    },
    {
      name: 'tabs',
      path: 'tabs'
    },
    {
      name: 'tooltip',
      path: 'tooltip'
    },
    {
      name: 'slider',
      path: 'slider'
    },
    {
      name: 'animation',
      path: 'animation'
    },
    {
      name: 'inject',
      path: 'inject'
    },
    {
      name: 'outlet',
      path: 'outlet'
    },
    {
      name: 'form',
      path: 'form'
    }
  ]

}
